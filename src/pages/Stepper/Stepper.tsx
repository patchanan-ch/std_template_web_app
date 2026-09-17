import {
  CardInfo,
  QontoStepper,
  ColorlibStepper,
  PageHeader,
} from "rcl-shared-components";
import { useState } from "react";

import { Box, Button, Stack, Typography, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const StepperEx = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
  // Stepper handlers
  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // Custom icons for ColorlibStepper
  const customIcons = {
    1: <HomeIcon />,
    2: <PersonIcon />,
    3: <CheckCircleIcon />,
  };

  return (
    <div className="container-fluid">
      <PageHeader title={"Stepper Components Example"} />
      <CardInfo>
        {/* Stepper Demo Section */}
        <Box sx={{ padding: 3 }}>
          <Stack spacing={5}>
            {/* QontoStepper Demo */}
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                1. QontoStepper (Minimal Style)
              </Typography>
              <Box sx={{ mt: 3, mb: 3 }}>
                <QontoStepper steps={steps} activeStep={activeStep} />
              </Box>
            </Paper>

            {/* ColorlibStepper Demo */}
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                2. ColorlibStepper (Gradient Style with Custom Icons)
              </Typography>
              <Box sx={{ mt: 3, mb: 3 }}>
                <ColorlibStepper
                  steps={steps}
                  activeStep={activeStep}
                  icons={customIcons}
                />
              </Box>
            </Paper>

            {/* Controls */}
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                Controls (Not available in component as an example stepper)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                >
                  Next
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Box>
              <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
                Current Step: {activeStep + 1} / {steps.length}
              </Typography>
            </Paper>

            {/* Custom Colors Example */}
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                3. QontoStepper with Custom Colors
              </Typography>
              <Box sx={{ mt: 3, mb: 3 }}>
                <QontoStepper
                  steps={steps}
                  activeStep={activeStep}
                  activeColor="#ff5722"
                  inactiveColor="#e0e0e0"
                />
              </Box>
            </Paper>

            {/* Custom Gradient Example */}
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                4. ColorlibStepper with Blue Gradient
              </Typography>
              <Box sx={{ mt: 3, mb: 3 }}>
                <ColorlibStepper
                  steps={steps}
                  activeStep={activeStep}
                  // icons={customIcons}
                  gradientActive="linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
                  gradientConnector="linear-gradient(95deg, #2196F3 0%, #21CBF3 100%)"
                />
              </Box>
            </Paper>
          </Stack>
        </Box>

        <hr style={{ margin: "40px 0" }} />
      </CardInfo>
    </div>
  );
};
