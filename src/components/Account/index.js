import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountSecurity = () => (
  <div>
    <h1>Account Security</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

export default AccountSecurity;