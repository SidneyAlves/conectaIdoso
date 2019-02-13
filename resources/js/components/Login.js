import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const Login = () => {
    return (
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">Faça seu Login</p>
                    <label
                      htmlFor="defaultFormCardNameEx"
                      className="grey-text font-weight-light"
                    >
                      Seu nome
                    </label>
                    <input
                      type="text"
                      id="defaultFormCardNameEx"
                      className="form-control"
                    />
                    <br />
                    <label
                      htmlFor="defaultFormCardEmailEx"
                      className="grey-text font-weight-light"
                    >
                      Sua senha
                    </label>
                    <input
                      type="password"
                      id="defaultFormCardEmailEx"
                      className="form-control"
                    />
                    <div className="text-center py-4 mt-3">
                      <MDBBtn className="btn btn-outline-purple" type="submit">
                        Logar
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    };

export default Login;