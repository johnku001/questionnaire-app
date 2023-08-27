import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper, { PopperPlacementType } from '@mui/material/Popper';

export interface CustomTextFieldProps {
  helpTitle: string;
  helpText: string;
  description: string;
  icon: {
    left?: string;
    right?: string;
  };
  onChange: (value: string) => void;
  [key: string]: any;
}

export default function CustomTextField({
  helpTitle,
  helpText,
  description,
  icon,
  onChange,
  ...props
}: CustomTextFieldProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType | undefined>();
  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen(prev => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };
  const [value, setValue] = useState<string | undefined>();
  const onSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <div className="text-question">
      <p>{description}</p>
      <div className="text">
        <div className="icons">
          {icon.left ? <i className={icon.left} aria-hidden="true"></i> : null}
        </div>
        <TextField
          type={props.type}
          name={props.name}
          label={props.label}
          id={props.id}
          fullWidth={props.fullWidth}
          multiline={props.multiline}
          helperText={props.helperText}
          required={props.required}
          variant="outlined"
          placeholder={value ? value : props.defaultValue}
          onChange={onSelectChange}
        />
        <div className="icons">
          {icon.right ? (
            <i className={icon.right} aria-hidden="true"></i>
          ) : null}
        </div>
        <i
          onClick={handleClick('top-start')}
          className="fa fa-question-circle"
          aria-hidden="true"
        ></i>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={1000}>
              <Paper>
                <Typography className="popper" sx={{ p: 2 }}>
                  <span className="h5">
                    <dfn>{helpTitle}</dfn>
                  </span>
                  <span className="text">{helpText}</span>
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    </div>
  );
}
