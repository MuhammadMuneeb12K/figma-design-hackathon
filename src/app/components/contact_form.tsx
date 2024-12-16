"use client";

import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        interestedIn: '',
        message: ''
    });

    return (
        <form className="contact-form">
            <div className="form-group">
                <label className="form-label">Name</label>
                <input
                    className="form-input"
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                />
            </div>
            <div className="form-group">
                <label className="form-label">
                    Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                    className="form-input"
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    required
                />
            </div>
            <div className="form-group">
                <label className="form-label">
                    E-mail <span className="text-red-500">*</span>
                </label>
                <input
                    className="form-input"
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    required
                />
            </div>
            <div className="form-group">
                <label className="form-label">Interested In</label>
                <input
                    className="form-input"
                    id="interestedIn"
                    type="text"
                    name="interestedIn"
                    value={form.interestedIn}
                />
            </div>
            <div className="textarea-group">
                <label className="textarea-label">
                    Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    className="textarea-input"
                    id="message"
                    name="message"
                    value={form.message}
                    required
                />
            </div>
        </form>
    );
}
