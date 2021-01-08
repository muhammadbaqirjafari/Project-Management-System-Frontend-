import React ,{useState} from "react";

// Importing CSS
import styles from "./AccountDetails.module.css";
import { Header } from "../Header/Header";


import { Card , TextField, Typography, Button,CardContent,CardActions} from "@material-ui/core";



export const AccountDetails = () => {


//  value should be taken from database and displayed if not null 
      const [fullName,setFullName ] = useState("");
      const [email, setEmail] = useState("");

      const [bio,setBio ] = useState("");
      const [country, setCountry] = useState("");
      
      const [city,setCity ] = useState("");
      const [fulladdress, setFullAddress] = useState("");
      





const submit = (e) => {
    e.preventDefault(); // Prevent Form from submitting
    // entered data should be saved in database  
   // as there is no field required type so no need for check so just update the databse
    console.log(fullName,email,bio,country,city,fulladdress);
    };
  





return (
<div>
      <Header />
      <div className={`${styles.root}  mx-auto`}>
            <div className={styles.mainDiv}>
                  {/** Here Goes the Title Typo */}
                  <div class={`${styles.title} mt-3 mb-3`}>
                        <section  class={styles.titleSection}>
                              <div class="container xs-2">
                                    <div class="xs-12" >
                                          <h3 class="h3-head"> Account Settings</h3>
                                    </div>
                                    <div class=" h3-head xs-12">
                                          <h6 class=""> Change account information and settings</h6>
                                    </div>
                              </div>
                        </section>
                  </div>
                  <form className={styles.mainForm} action="/home" method="POST">
                        <div className={`${styles.topDiv} container xs-12 md-12 sm-12`}>
                              <div className={styles.mainCardDiv}>
                                     <div className={`${styles.card1} col-xs-12 col md-3 `}>
                                          {/** Drop Box TYpe Card */}
                                          <Card className={`${styles.linkCard} xs-12 md-3 ` }>
                                                <CardContent>
                                                      <Typography className={styles.linkCardLink} color="textSecondary" >
                                                          <div class="list-group" id='short'>
                                                                  <a href="#" class="list-group-item list-group-item-action ">General</a>
                                                            </div>
                                                             </Typography>

                                                </CardContent>
                                          </Card>

                                    </div>
                                    <div className={styles.card2}>
                                    {/*CARD TYPE Form */}
                                    <Card className={`${styles.mainCard}  xs-12 md-9  `}>
                                    <CardContent>
                                          <Typography className={styles.mainCardTitle}  variant='h5' component='h3' gutterBottom>
                                                      Basic Information
                                          </Typography>
                                          <hr/>
                                          <Typography variant="body" component="div">
                                          <div className="d-flex  mx-auto">
                                                            <div className={styles.dd1}  >
                                                                  <Typography className={styles.CardFieldlabel} variant="h5" component="h5">
                                                                  Full Name
                                                                  </Typography>
                                                                  <div className={styles.nameField}>
                                                                        <TextField
                                                                        fullWidth
                                                                        type="text"
                                                                        variant="outlined"
                                                                        placeholder=" Your Full Name"
                                                                        className="mb-3 "
                                                                        onChange={(e) => setFullName(e.target.value)}
                                                                        />{" "}
                                                                  </div>
                                                            
                                                            </div>         
                                                       <div className={styles.dd1}>
                                                                  <Typography className={styles.CardFieldlabel} variant="h5" component="h3">
                                                            E-Mail
                                                            </Typography>    
                                                            <div className={styles.emailField}>
                                                                  <TextField
                                                                  fullWidth
                                                                  type="email"
                                                                  variant="outlined"
                                                                  placeholder=" Your E-Mail"
                                                                  className="mb-3 "
                                                                  onChange={(e) => setEmail(e.target.value)}
                                                                  />{" "}
                                                            </div>
                                                      </div>

                                          </div>

                                                <div className={styles.bioField}>
                                                      <Typography className={styles.CardFieldlabel} variant="h5" component="h2">
                                                            Bio
                                                            </Typography>
                                                <TextField
                                                fullWidth
                                                type="text"
                                                variant="outlined"
                                                multiline = {true}
                                                rows = {4}
                                                pllaceholder=" Your Bio"
                                                className="mb-3 "
                                                onChange={(e) => setBio(e.target.value)}
                                                />{" "}
                                                </div>
                                          </Typography>
                                          <hr/>
                                          <Typography className="" color="">
                                              <div className="d-flex  mx-auto">
                                                            <div className={styles.dd1}  >
                                                                  <Typography className={styles.CardFieldlabel} variant="h5" component="h5">
                                                                  Country
                                                                  </Typography>
                                                                  <div className={styles.countryField}>
                                                                        <TextField
                                                                        fullWidth
                                                                        type="text"
                                                                        variant="outlined"
                                                                        placeholder=" Your Country"
                                                                        className="mb-3 "
                                                                        onChange={(e) => setCountry(e.target.value)}
                                                                        />{" "}
                                                                  </div>
                                                            
                                                            </div>         
                                                       <div className={styles.dd1}>
                                                                  <Typography className={styles.CardFieldlabel} variant="h5" component="h3">
                                                            City
                                                            </Typography>    
                                                            <div className={styles.cityField}>
                                                                  <TextField
                                                                  fullWidth
                                                                  type="text"
                                                                  variant="outlined"
                                                                  placeholder=" Your City"
                                                                  className="mb-3 "
                                                                  onChange={(e) => setCity(e.target.value)}
                                                                  />{" "}
                                                            </div>
                                                      </div>

                                          </div>

                                                <div className={styles.fullAddressField}>
                                                      <Typography className={styles.CardFieldlabel} variant="h5" component="h2">
                                                            Full Address
                                                            </Typography>
                                                <TextField
                                                fullWidth
                                                type="text"
                                                variant="outlined"
                                                placeholder="Your Full Address"
                                                className="mb-2 "
                                                onChange={(e) => setFullAddress(e.target.value)}
                                                />{" "}
                                                </div>
                                          </Typography>
                                    
                                                </CardContent>
                                          <CardActions item xs={3}>
                                                <Button 
                                                size="large"
                                                className={styles.AccountsBtn}
                                                onClick={(e) => submit(e)}
                                                variant="contained"
                                                >
                                                       Save
                                                       </Button>
                                          </CardActions>


                                    </Card>
 
                                    </div>     
                              </div>



                        </div>
                  </form>


            </div>




      </div>
</div>
);
};