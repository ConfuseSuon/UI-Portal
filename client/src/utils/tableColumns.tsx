import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Checkbox, Stack } from "@mui/material";
import { useMemo } from "react";

export const allTestCaseDrawer = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Type",
    accessor: "type",
    // hidden: true,
  },
  {
    Header: "Runner",
    accessor: "runner",
    // hidden: true,
  },
  {
    Header: "Action",
    Cell: ({ row }: any) => {
      return (
        <Stack direction="row" alignItems={"center"} gap={".3rem"}>
          <Checkbox />
        </Stack>
      );
    },
  },
];

export const allTestCaseColumns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Type",
    accessor: "type",
    // hidden: true,
  },
  {
    Header: "Runner",
    accessor: "runner",
    // hidden: true,
  },
  {
    Header: "Action",
    Cell: ({ row }: any) => {
      return (
        <Stack direction="row" alignItems={"center"} gap={".3rem"}>
          <EditOutlined
            sx={{ fontSize: "1rem", cursor: "pointer", color: "#2196f3" }}
          />
          <DeleteOutline
            sx={{ fontSize: "1rem", cursor: "pointer", color: "#2196f3" }}
          />
        </Stack>
      );
    },
  },
];

export const playlistCloumns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Type",
    accessor: "type",
    // hidden: true,
  },
  {
    Header: "Runner",
    accessor: "runner",
    // hidden: true,
  },
  {
    Header: "Action",
    Cell: ({ row }: any) => {
      return (
        <Stack direction="row" alignItems={"center"} gap={".3rem"}>
          <EditOutlined
            sx={{ fontSize: "1rem", cursor: "pointer", color: "#2196f3" }}
          />
          <DeleteOutline
            sx={{ fontSize: "1rem", cursor: "pointer", color: "#2196f3" }}
          />
        </Stack>
      );
    },
  },
];
