import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { authApi, userStorageKey } from "./authSettings"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import "./Login.css"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        // margin: theme.spacing(1),
        width: '40ch',
      },
    button: {
        marginLeft: 30,
        },
    createButton: {
        marginLeft: 40, 
    }
    },
  }));


export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const classes = useStyles()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    sessionStorage.setItem(userStorageKey, exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
            
            <div className="register">
                <h2>I'm new here</h2>
                <section className="link--register">
                    <Link to="/register" className="register-link">Create an account</Link>
                </section>
            </div>
            <hr></hr>
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    
                    <h2>Sign in</h2>
                    <fieldset>
                        {/* <label htmlFor="inputEmail"> Email address </label> */}
                        <TextField type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            variant="outlined" className="form-control"
                            value={loginUser.email}
                            onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <Button type="submit" variant="contained" color="primary" className={classes.addButton} style={{margin: 20, color: "#white", fontWeight: "bold", border: "solid #f44336 2px"}}
                            >Sign in
                        </Button>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}


