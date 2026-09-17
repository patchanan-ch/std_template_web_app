import { CardInfo, PageHeader, RCLSpeedDial } from "rcl-shared-components";
import { useState } from "react";
import { Box, Paper, Typography, SpeedDialIcon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPen,
  faSave,
  faPrint,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

export const SpeedDialEx = () => {
  const [lastAction, setLastAction] = useState<string>("");

  const speedDialActions = [
    {
      icon: <FontAwesomeIcon icon={faSave} />,
      name: "Save",
      onClick: () => setLastAction("Save clicked"),
    },
    {
      icon: <FontAwesomeIcon icon={faPrint} />,
      name: "Print",
      onClick: () => setLastAction("Print clicked"),
    },
    {
      icon: <FontAwesomeIcon icon={faShare} />,
      name: "Share",
      onClick: () => setLastAction("Share clicked"),
    },
  ];

  return (
    <div className="container-fluid">
      <PageHeader title={"Speed Dial Example"} />

      <CardInfo>
        <Box sx={{ padding: 3 }}>
          {/* Without Icon */}
          <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              1. Speed Dial without Custom Icon
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Default icon with basic actions
            </Typography>
            <Box
              sx={{
                position: "relative",
                height: 320,
                border: "1px dashed #ccc",
                borderRadius: 1,
              }}
            >
              <RCLSpeedDial
                actions={speedDialActions}
                ariaLabel="Quick Actions"
                direction="up"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                }}
                FabProps={{
                  size: "large",
                  sx: {
                    bgcolor: "#4e73df",
                    "&:hover": {
                      bgcolor: "#3862db",
                    },
                  },
                }}
              />
            </Box>
          </Paper>

          {/* With Icon - Bottom Left */}
          <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              2. Speed Dial with Custom Icon (Bottom Left)
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Positioned at bottom left with FontAwesome icons
            </Typography>
            <Box
              sx={{
                position: "relative",
                height: 320,
                border: "1px dashed #ccc",
                borderRadius: 1,
              }}
            >
              <RCLSpeedDial
                actions={speedDialActions}
                ariaLabel="Quick Actions"
                direction="up"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: "auto",
                }}
                FabProps={{
                  size: "large",
                  sx: {
                    bgcolor: "#4e73df",
                    "&:hover": {
                      bgcolor: "#3862db",
                    },
                  },
                }}
                icon={
                  <SpeedDialIcon
                    icon={<FontAwesomeIcon icon={faPlus} />}
                    openIcon={<FontAwesomeIcon icon={faPen} />}
                  />
                }
              />
            </Box>
          </Paper>

          {/* Action Feedback */}
          {lastAction && (
            <Paper
              elevation={2}
              sx={{
                padding: 2,
                bgcolor: "#d1ecf1",
                color: "#0c5460",
                borderRadius: 1,
              }}
            >
              <Typography variant="body1">
                <strong>Last Action:</strong> {lastAction}
              </Typography>
            </Paper>
          )}
        </Box>
      </CardInfo>
    </div>
  );
};
