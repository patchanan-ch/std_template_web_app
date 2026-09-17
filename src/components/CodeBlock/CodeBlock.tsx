import { useState } from "react";
import { Box, Collapse, IconButton, Tooltip, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faChevronUp,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  defaultExpanded?: boolean;
  className?: string;
}

export const CodeBlock = ({
  code,
  language = "tsx",
  title,
  defaultExpanded = false,
  className,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Box
      className={className}
      sx={{
        position: "relative",
        borderRadius: 1,
        overflow: "hidden",
        border: "1px solid var(--primary-500, #00539f)",
        mb: 2,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "var(--primary-500, #00539f)",
          px: 2,
          py: 0.5,
          cursor: "pointer",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small" sx={{ color: "var(--base-25, #fff)", p: 0 }}>
            {expanded ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </IconButton>
          <Typography
            variant="caption"
            sx={{ color: "var(--base-25, #fff)", fontFamily: "Nunito, sans-serif" }}
          >
            {title || language}
          </Typography>
        </Box>
        <Tooltip title={copied ? "Copied!" : "Copy"}>
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            sx={{ color: "var(--base-25, #fff)" }}
          >
            {copied ? (
              <FontAwesomeIcon icon={faCheck} color="var(--green-500, #28a745)" />
            ) : (
              <FontAwesomeIcon icon={faCopy} />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Collapsible Code */}
      <Collapse in={expanded}>
        <Box
          component="pre"
          sx={{
            margin: 0,
            padding: 2,
            backgroundColor: "var(--base-950, #0a101b)",
            overflow: "auto",
            maxHeight: 400,
            fontSize: "13px",
            lineHeight: 1.5,
            fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
            color: "var(--base-200, #dde5f0)",
          }}
        >
          <code>{code}</code>
        </Box>
      </Collapse>
    </Box>
  );
};

export default CodeBlock;
