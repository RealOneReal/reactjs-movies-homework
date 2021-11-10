import React, { Component } from "react";
import { Box, Container, Typography } from "@mui/material";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ backgroundColor: "secondary.dark" }}>
          <Container maxWidth="lg" sx={{ pt: 2 }}>
            <Box sx={{ textAlign: "center", height: "90vh" }}>
              <Typography variant="h4" color="primary.dark">
                Something went wrong ...
              </Typography>
            </Box>
          </Container>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
