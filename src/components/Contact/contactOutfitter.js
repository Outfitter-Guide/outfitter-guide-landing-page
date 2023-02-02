import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import { 
    QuestionContainer, 
    QuestionWrapper,
    QuestionH1,
    Label,
    InputWrapper,
    Input,
    Submit,
    InputSection,
    SubmitWrapper,
    FormContainer
 } from '../Contact/ContactElements';

export const ContactOutfitter = () => {
  const form = useRef();
  const firstName = useRef();
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ainjv4r', 'template_wfqynul', form.current, 'p5-6v5ru9lIE0z-c6')
      .then((result) => {
          console.log(result.text);
          alert("Form Submitted Successfully")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <QuestionContainer>
        <QuestionWrapper>
        <QuestionH1>Outfitter Questionnaire</QuestionH1>
        <FormContainer>
            <form ref={form} onSubmit={sendEmail}>
                <InputSection>
                    <InputWrapper>
                    <Label>*First Name</Label>
                    <Input type='text' name='firstName' required ref={firstName}/>
                </InputWrapper>
                <InputWrapper>
                    <Label>*Last Name</Label>
                    <Input type='text' name='lastname' required/>
                </InputWrapper>
                <InputWrapper>
                    <Label>*Outfitter Email</Label>
                    <Input type='email' name='outfitterEmail' placeholder='example@email.com' required/>
                </InputWrapper>
                <InputWrapper>
                    <Label>*Outfitter Name</Label>
                    <Input type='text' name='outfitterName' required/>
                </InputWrapper>
                <InputWrapper>
                    <Label>*Outfitter State</Label>
                    <Input type='text' name='outfitterState' required/>
                </InputWrapper>
                <InputWrapper>
                    <Label>Phone Number</Label>
                    <Input type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' name='number' placeholder='000-000-0000'/>
                </InputWrapper>
                </InputSection>
                <SubmitWrapper>
                    <Submit type="submit" value="Submit" />
                </SubmitWrapper>
        
            </form>
        </FormContainer>
        </QuestionWrapper>
    </QuestionContainer>
    
  );
};