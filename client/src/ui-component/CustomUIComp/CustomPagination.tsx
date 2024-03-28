import { TablePagination } from "@mui/material";
import React, { type ChangeEvent, type ElementType } from "react";

interface Props {
  component: ElementType<any>;
  count: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  onRowsPerPageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
}

// Button Component
const CustomPagination = (props: Props): React.ReactElement => {
  const {
    component,
    count,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions,
  } = props;

  return (
    <TablePagination
      component={component}
      count={count}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      sx={{ mb: -3 }}
    />
  );
};

export default CustomPagination;
