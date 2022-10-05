import React from 'react';
import BorderedInput from './BorderedInput';

function EditForm({isSignUp, onSubmit, form, createChangeTextHandler}) {
  return (
    <>
      <BorderedInput
        hasMarginBottom
        value="jelliijoa@gmail.com"
        onChangeText={createChangeTextHandler('email')}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <BorderedInput
        placeholder="비밀번호"
        hasMarginBottom={isSignUp}
        value={form.password}
        onChangeText={createChangeTextHandler('password')}
        secureTextEntry
      />
        <BorderedInput
          placeholder="비밀번호 확인"
          value={form.confirmPassword}
          onChangeText={createChangeTextHandler('confirmPassword')}
          secureTextEntry
        />
    </>
  );
}

export default EditForm;
