import { SearchDataEx } from "../consts/SearchDataEx";
import { SearchCriteriaType } from "../pages/SearchScreenEx/SearchScreenEx";
import { SearchTypeEx } from "../types/SearchTypeEx";

/**
 * Don't copy this function
 *
 * This is where you call your API
 */
export function SearchMockFetch(
  criteria: SearchCriteriaType
): Promise<SearchTypeEx[]> {
  return new Promise((resolve, reject) => {
    if (criteria.success) {
      const searchResult = SearchDataEx.filter((v) => {
        return (
          (criteria.id === undefined || criteria.id === v.id) &&
          v.first.includes(criteria.first) &&
          v.last.includes(criteria.last) &&
          (criteria.gender === "" || criteria.gender === v.gender) &&
          (criteria.age === undefined || criteria.age === v.age)
        );
      });
      setTimeout(() => {
        resolve(searchResult);
      }, 1000);
    } else {
      setTimeout(() => {
        reject(new Error("Success is not checked"));
      }, 1000);
    }
  });
}
