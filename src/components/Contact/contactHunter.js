import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import { 
    QuestionContainer, 
    QuestionWrapper,
    QuestionH1,
    QuestionH2,
    Label,
    InputWrapper,
    Input,
    FormContainer,
    InputSection,
    SubmitWrapper,
    Submit
 } from '../Contact/ContactElements';

export const ContactHunter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ainjv4r', 'template_7q9czkn', form.current, 'p5-6v5ru9lIE0z-c6')
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
        <QuestionH1>Hunter Questionnaire</QuestionH1>
        <QuestionH2>Refer your outfitter below and receive free SWAG</QuestionH2>
        <FormContainer>
          <form ref={form} onSubmit={sendEmail}>
            <InputSection>
                <InputWrapper>
                  <Label>*First Name</Label>
                  <Input type='text' name='firstName' required/>
                </InputWrapper>
                <InputWrapper>
                  <Label>*Last Name</Label>
                  <Input type='text' name='lastname' required/>
                </InputWrapper>
                <InputWrapper>
                  <Label>*Hunter Email</Label>
                  <Input type='email' name='hunterEmail' placeholder='example@email.com' required/>
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
                <InputWrapper>
                  <Label>*Outfitter Email</Label>
                  <Input type='email' name='outfitterEmail' placeholder='example@email.com' required/>
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

