import {
  ApiUtils,
  PageHeader,
  RCLAlertNotification,
  RCLLoader,
} from "rcl-shared-components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MENUS } from "../../consts/Menus";
import { SearchMockFetch } from "../../services/SearchServiceEx";
import { SearchTypeEx } from "../../types/SearchTypeEx";
import { ResultCard } from "./components/ResultCard";
import { SearchForm } from "./components/SearchForm";

export type SearchCriteriaType = {
  id: number | undefined;
  first: string;
  last: string;
  gender: string;
  age: number | undefined;
  success: boolean;
};

export const defaultSearch: SearchCriteriaType = {
  id: undefined,
  first: "",
  last: "",
  gender: "",
  age: undefined,
  success: true,
};

export const SearchScreenEx = () => {
  // Hooks from react-router-dom
  const navigate = useNavigate();
  const location = useLocation();

  // Hooks from rcl-shared-components
  const { addLoadingTask, removeLoadingTask } = RCLLoader.useContext();
  const { addAlertNotification } = RCLAlertNotification.useContext();

  // What's currently in search form right now
  const [form, setForm] = useState<SearchCriteriaType>(defaultSearch);
  // What's currently being searched
  const [criteria, setCriteria] = useState<SearchCriteriaType>();
  // Data result from fetch
  const [fetchedData, setFetchedData] = useState<SearchTypeEx[]>();

  /**
   * If state exists, perform search
   */
  useEffect(() => {
    //setFetchedData(undefined);
    if (location.state) {
      setCriteria(location.state);
      setForm(location.state);
    } else {
      setFetchedData(undefined);
      setCriteria(undefined);
      setForm(defaultSearch);
    }
  }, [location]);

  useEffect(() => {
    getData();
  }, [criteria]);

  const getData = async () => {
    if (!criteria) {
      return;
    }
    const fetchTask = { task: "search" };
    try {
      addLoadingTask(fetchTask);
      const result = await SearchMockFetch(criteria);
      console.log(result);
      setFetchedData(result);
    } catch (e) {
      /**
       * This is usually how error should be handled
       * In this case, no API were actually called, isCatchSessionExpired will always be false.
       */
      if (ApiUtils.isCatchSessionExpired(e)) {
        ApiUtils.redirectToSessionExpirePage();
      } else {
        addAlertNotification({
          status: "ERROR",
          message: ApiUtils.generateErrorMessageFromCatch(e),
        });
      }
    } finally {
      removeLoadingTask(fetchTask);
    }
  };

  return (
    <div className="container-fluid">
      <PageHeader title={"Search Screen Example"} />
      <SearchForm
        form={form}
        setForm={setForm}
        onSearch={() => {
          /**
           * Instead of searching in this page, redirect to the same page with the criteria as the state.
           * This way, user can use browser's back button to review previous search
           */
          navigate(MENUS.SearchScreenEx.url, { state: form });
        }}
        onReset={() => {
          navigate(MENUS.SearchScreenEx.url);
        }}
      ></SearchForm>
      {fetchedData ? <ResultCard data={fetchedData}></ResultCard> : <></>}
    </div>
  );
};
