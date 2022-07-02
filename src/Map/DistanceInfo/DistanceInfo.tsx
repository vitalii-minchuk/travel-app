import React from "react"
import Snackbar from "@mui/material/Snackbar"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"

type DistanceInfoProps ={
  leg: google.maps.DirectionsLeg
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DistanceInfo: React.FC<DistanceInfoProps> = ({ leg, open, setOpen }) => {
  const message = `distance: ${leg.distance?.text}, walk: ${leg.duration?.text}`

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={8000}
        onClose={handleClose}
        message={message}
        action={action}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      />
    </div>
  );
}

