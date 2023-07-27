import { useDispatch } from 'react-redux';
import { updateProfile } from 'redux/auth/operations';
import css from './UpdateProfile.module.css';

export const UpdateProfile = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      updateProfile({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        New Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        New Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Update Profile</button>
    </form>
  );
};
