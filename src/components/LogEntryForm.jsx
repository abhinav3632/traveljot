import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { createLogEntry } from './API';

const LogEntryForm = ({ location, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            data.latitude = location.latitude;
            data.longitude = location.longitude;
            await createLogEntry(data);
            onClose();
        } catch (error) {
            console.error(error);
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
            {error && <h3 className="error">{error}</h3>}
            <label htmlFor="title">Title</label>
            <input name="title" {...register("title", { required: true })} />
            {errors.title && <p className="error">Title is required</p>}
            <label htmlFor="comments">Comments</label>
            <textarea name="comments" rows={3} {...register("comments")}></textarea>
            <label htmlFor="description">Description</label>
            <textarea name="description" rows={3} {...register("description")}></textarea>
            <label htmlFor="image">Image</label>
            <input name="image" {...register("image")} /><br />
            <label htmlFor="visitDate">Visit Date</label>
            <input name="visitDate" type="date" {...register("visitDate", { required: true })} />
            {errors.visitDate && <p className="error">Visit date is required</p>}
            <button disabled={loading}>{loading ? 'Loading...' : 'Create Entry'}</button>
        </form>
    );
};

export default LogEntryForm;