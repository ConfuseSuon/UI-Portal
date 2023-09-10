import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { ReactElement } from "react";

type Props = {
  name: string;
  label: string;
  value: string | any;
  onChange?: (event: SelectChangeEvent<string>) => void;
  options?: any;
  placeholder?: string;
  sx?: any;
  variant?: any;
};

const CustomSelectOption = (props: Props): ReactElement => {
  const { name, label, value, onChange, options, sx } = props;

  return (
    <Box sx={{ width: "20rem" }}>
      <FormControl fullWidth size="small">
        <InputLabel sx={sx}>{label}</InputLabel>
        <Select
          data-testid={`custom-${name}-select`}
          labelId={`${name}-select-label`}
          id={`${name}-select`}
          value={value}
          label={label}
          onChange={onChange}
          autoWidth={false}
          fullWidth={false}
          variant="outlined"
          name={name}
          sx={sx}
        >
          {options?.map((item: any) => {
            return (
              <MenuItem
                data-testid="customOptionList"
                key={item.id}
                value={item.id}
              >
                {(item.displayName as string) ?? (item?.name as string)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelectOption;
