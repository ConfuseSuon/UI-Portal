import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Collapse,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import moment from "moment";
import React, { Fragment, useState } from "react";
import { useExpanded, useTable } from "react-table";
import { v4 } from "uuid";

const CustomTable = ({
  className,
  data,
  columns,
  handleSort,
  fontSize = ".8rem",
}: any): React.ReactElement => {
  const theme = useTheme<any>();

  const [openRows, setOpenRows] = useState<any>([]);

  const handleRowClick = (rowIndex: any): void => {
    if (openRows.includes(rowIndex) === true) {
      setOpenRows(openRows.filter((row: any) => row !== rowIndex));
    } else {
      setOpenRows([...openRows, rowIndex]);
    }
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: columns
          .filter((column: any) => column.hidden)
          .map((column: any) => column.accessor),
      },
    },
    useExpanded
  );

  const hasCollapsibleItem = columns.some(
    (column: any) =>
      column.hidden === true &&
      rows.some((row: any) => row.original[column.accessor])
  );

  return (
    <TableContainer sx={{ maxHeight: 550 }}>
      <Table stickyHeader {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup, index) => (
            <TableRow {...headerGroup.getHeaderGroupProps()} key={v4()}>
              {hasCollapsibleItem === true && <TableCell key={v4()} />}
              {headerGroup.headers.map((column, columnIndex) => (
                <TableCell
                  {...column.getHeaderProps()}
                  key={v4()}
                  sx={{ ...theme.typography.darkModeBg4 }}
                >
                  <Grid sx={{ display: "flex" }}>
                    <Typography variant="subtitle1">
                      {column.render("Header")}
                    </Typography>
                    {column.id !== "selection" &&
                      column.Header !== "" &&
                      handleSort !== undefined && (
                        <KeyboardArrowDownIcon
                          sx={{ fontSize: "16px" }}
                          onClick={() => handleSort()}
                        />
                      )}
                  </Grid>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row: any, rowIndex: any) => {
            prepareRow(row);
            const isRowOpen = openRows.includes(rowIndex);
            return (
              <Fragment key={v4()}>
                <TableRow className={className} key={v4()}>
                  {hasCollapsibleItem === true && (
                    <TableCell
                      sx={{
                        background: isRowOpen === true ? "#d82d2b" : "white",
                      }}
                      size="medium"
                    >
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {
                          handleRowClick(rowIndex);
                        }}
                        sx={{
                          background: isRowOpen === true ? "white" : "",
                          color: isRowOpen === true ? "#d82d2b" : "",
                          "&:hover": {
                            background: isRowOpen === true ? "white" : "",
                            color: isRowOpen === true ? "#d82d2b" : "",
                          },
                        }}
                      >
                        {isRowOpen === true ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>
                  )}
                  {row.cells.map((cell: any, cellIndex: any) => (
                    <TableCell
                      size="medium"
                      {...cell.getCellProps()}
                      key={v4()}
                      sx={{
                        ...theme.typography.darkModeBg4,
                        // background:
                        //   isRowOpen === true && hasCollapsibleItem === true
                        //     ? "#d82d2b"
                        //     : "white",
                        // color:
                        //   isRowOpen === true && hasCollapsibleItem === true
                        //     ? "white"
                        //     : "",
                      }}
                    >
                      <Typography variant="body1">
                        {cell.render("Cell")}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
                {isRowOpen === true && hasCollapsibleItem === true && (
                  <TableRow>
                    <TableCell
                      colSpan={
                        visibleColumns.length +
                        (hasCollapsibleItem === true ? 1 : 0)
                      }
                      sx={{ background: "#f5f5f5" }}
                    >
                      {/* Content inside the collapsible row */}
                      <Collapse in={true} style={{ display: "block" }}>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell>
                                <Typography
                                  variant="body1"
                                  paragraph={false}
                                  sx={{
                                    fontWeight: 500,
                                    fontSize: "1.6rem",
                                    lineHeight: "1.6rem",
                                  }}
                                  color="error"
                                >
                                  More Details
                                </Typography>
                              </TableCell>
                            </TableRow>
                            {columns.map((column: any, columnIndex: any) => {
                              if (column.hidden != null) {
                                const cellValue =
                                  column.accessor.includes("Time") ||
                                  column.accessor.includes("Date")
                                    ? moment(
                                        row.original[column.accessor]
                                      ).format("YYYY-MM-DD")
                                    : row.original[column.accessor];
                                return (
                                  <>
                                    <TableRow key={v4()}>
                                      <TableCell>
                                        <Typography fontSize={fontSize}>
                                          {column.Header}:
                                        </Typography>
                                      </TableCell>
                                      <TableCell>
                                        <Typography fontSize={fontSize}>
                                          {cellValue}
                                        </Typography>
                                      </TableCell>
                                    </TableRow>
                                  </>
                                );
                              }
                              return null;
                            })}
                          </TableBody>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
