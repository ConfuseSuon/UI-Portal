import {
  FormControl,
  MenuItem,
  type SelectChangeEvent,
  Select,
  InputLabel,
} from "@mui/material";

interface Options {
  name: string;
  label: string;
  value?: string | any;
  onChange?: (event: SelectChangeEvent<string>) => void;
  options?: any;
  placeholder?: string;
  sx?: any;
  variant?: any;
}
export default function SelectOption(props: Options): React.ReactElement {
  const { name, label, value, onChange, options, sx } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel sx={sx}>{label}</InputLabel>
      <Select
        data-testid={`custom-${name}-select`}
        fullWidth
        labelId={`${name}-select-label`}
        id={`${name}-select`}
        value={value}
        label={label}
        onChange={onChange}
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
  );
}
