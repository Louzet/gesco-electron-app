import React, { FC, useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Flash from '../components/UI/Flash';

import { login } from '../actions/AuthAction';
import { RootState } from '../store';

const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, loading } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="section">
      <div className="container">
        <h2 className="has-text-dark has-text-centered is-size-2 mb-3">
          Connectez vous
        </h2>
        <form className="form" onSubmit={submitHandler}>
          {error.message && <Flash type="danger" message={error.message} />}

          {/* Email */}
          <Input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Votre adresse email"
            label="Email"
            required
          />

          {/* Password */}
          <Input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="********"
            label="Mot de passe"
            required
          />

          {/* Submit */}
          <Button
            text={loading ? 'Loading...' : 'Connexion'}
            className="is-primary is-fullwidth mt-5"
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
