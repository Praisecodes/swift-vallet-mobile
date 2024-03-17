import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Layout from './layout';
import Input from '../../components/common/input';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid Email Address").required("Email Address Is Required"),
  password: Yup
    .string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must contain at least, 1 digit, 1 uppercase and 1 lowercase alphabet and must be up to 6 characters")
    .required("Password Is Required"),
});

const Register = () => {
  return (
    <Layout page="register">
      <View style={[tw`flex flex-col gap-y-5`]}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={(values) => { console.log(values) }}
        >
          {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <View>
                <Text style={[tw`text-sm text-[#344054] mb-1`, { fontFamily: "sora" }]}>
                  Email
                </Text>
                <Input
                  placeholder="user@example.com"
                  value={values.email}
                  translucent={false}
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  secureTextEntry={false}
                  onBlur={handleBlur('email')}
                />
                {errors.email && touched.email && errors.email && (
                  <Text style={[tw`text-[#ff0000] text-xs`, { fontFamily: "sora" }]}>
                    {errors.email && touched.password && errors.email}
                  </Text>
                )}
              </View>

              <View>
                <Text style={[tw`text-sm text-[#344054] mb-1`, { fontFamily: "sora" }]}>
                  Password
                </Text>
                <Input
                  placeholder="Password"
                  value={values.password}
                  translucent={false}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  onBlur={handleBlur('password')}
                />
                {errors.password && touched.password && errors.password && (
                  <Text style={[tw`text-[#ff0000] text-xs`, { fontFamily: "sora" }]}>
                    {errors.password && touched.password && errors.password}
                  </Text>
                )}
              </View>

              <TouchableWithoutFeedback onPress={() => { handleSubmit() }}>
                <Text style={[tw`bg-[#00BE5D] text-base mt-3 text-[#ffffff] w-[100%] py-4 text-center rounded-md`, { fontFamily: "sora" }]}>
                  Create account
                </Text>
              </TouchableWithoutFeedback>
            </>
          )}
        </Formik>
      </View>
    </Layout>
  )
}

export default Register
