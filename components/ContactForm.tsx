"use client"
import React from "react"
import { FormEvent, useState } from 'react'

export const ContactForm = () => {

    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [message,setMessage] = useState('')

    const onSubmit = async (e : FormEvent) => {
        e.preventDefault()

        try {
            const res = await fetch('./contact', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
                headers: {
                    'content-type': 'application/json'
                },
            })
            
        } catch(err:any) {
            console.error('Error encountered: ', err)
        }
    }


    return (
        <form onSubmit = {onSubmit}>
            <input 
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
            />
            <input 
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            <input 
                value = {message}
                onChange = {(e) => setMessage(e.target.value)}
                type="message"
                placeholder="Message"
            />
            <button type = "submit">Submit</button>
        </form>
    )
}