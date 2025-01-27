import React, { ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Alert, CircularProgress } from "@mui/material";

interface GoogleMapWrapperProps {
  children: ReactElement;
}

/**
 * Wrapper for Google Map components.
 * See https://developers.google.com/maps/documentation/javascript/react-map
 */
export const GoogleMapWrapper = ({ children }: GoogleMapWrapperProps) => {
  const render = (status: Status): ReactElement => {
    if (status === Status.FAILURE)
      return <Alert severity="error">Sorry, error loading Google Maps</Alert>;
    return <CircularProgress />;
  };

  return (
    <Wrapper apiKey={import.meta.env.VITE_GAPI_KEY} render={render}>
      {children}
    </Wrapper>
  );
};
