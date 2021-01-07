import React from "react";
import {IconButton} from "@material-ui/core";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
} from "@material-ui/icons";


import styles from './Footer.module.css';

export const Footer  = () =>{
    return(
        <div className={styles.footer}>
            <div className="container">
                <div className="row">
                    {/*column 1*/}
                    <div className="col-xs-12 col-md-2">
                        <ul className="list-unstyled">
                            <li to="/home" className={styles.a}>
                                <span className={styles.span}>PMS</span>
                            </li>
                            <li>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <FacebookIcon className={styles.icon} />
                                </IconButton>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <InstagramIcon className={styles.icon} />
                                </IconButton>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <TwitterIcon className={styles.icon} />
                                </IconButton>
                            </li>
                        </ul>
                    </div>
                        {/*column 2*/}
                    <div className="col-md-2 col-sm-6">
                        <h4>Services</h4>
                        <ul className="list-unstyled">
                            <li>hsbhs</li>
                            <li>jscsdbs</li>
                            <li>sbnxbjsh</li>
                        </ul>
                    </div>
                    {/*column 3*/}
                    <div className="col-md-2 col-sm-6">
                        <h4>Contact us</h4>
                        <ul className="list-unstyled">
                            <li>nshbj</li>
                            <li>sjshj</li>
                            <li>sjdhw</li>
                        </ul>
                    </div>
                    {/*column 4*/}
                    <div className="col-md-2 col-sm-6">
                        <h4>Singin</h4>
                        <ul className="list-unstyled">
                            <li>whsd</li>
                            <li>sfxve</li>
                            <li>xcefe</li>
                        </ul>
                    </div>
                    {/*column 5*/}
                    <div className="col-md-2 col-sm-6">
                        <h4>Singup</h4>
                        <ul className="list-unstyled">
                            <li>whsd</li>
                            <li>sfxve</li>
                            <li>xcefe</li>
                        </ul>
                    </div>
                    {/*column 6*/}
                    <div className="col-md-2 col-sm-6" >
                        <h4>Reset Password</h4>
                        <ul className="list-unstyled">
                            <li>whsd</li>
                            <li>sfxve</li>
                            <li>xcefe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;