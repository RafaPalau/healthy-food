import React from "react";
import { Formik, Field, Form} from "formik";
import { Persist } from "formik-persist";
import styles from "./styles.module.scss";
import { useCookies } from "react-cookie";
import Head from "next/head";
import Button from "../../components/Button";

export default function Register() {
  const [cookies, setCookie] = useCookies(["healthy-cookie"]);

  function onSubmitCookie(values, actions) {
    actions.setSubmitting(false);
    setCookie("healthy-cookie", values);
  }

  function onBlurCep(event, setFieldValue) {
    const { value } = event.target;

    const cep = value?.replace(/[^0-9]/g, "");
    if (cep?.length !== 8) {
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) =>
      response.json().then((data) => {
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("complemento", data.complemento);
        setFieldValue("uf", data.uf);
      })
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}>Healthy Food</h1>
        <span>register and get a special offer</span>
      </div>
      <Formik
        onSubmit={onSubmitCookie}
        validateOnMount
        initialValues={{
          name: "",
        }}
      >
        {({ setFieldValue }) => (
          <Form className={styles.register}>
            <div className={styles.personalData}>
              <div className={styles.formControlGrup}>
                <label>Nome</label>
                <Field name='name' type='text' required />
              </div>
              <Head>
                <title>Register | Healthy Food</title>
              </Head>
              <div className={styles.formControlGrup}>
                <label>Data de nascimento</label>
                <Field name='birthday' type='date' />
              </div>
              <div className={styles.formControlGrup}>
                <label>CPF</label>
                <Field name='cpf' type='text' />
              </div>
            </div>

            <div className={styles.addressData}>
              <div className={styles.formControlGrup}>
                <label>CEP</label>
                <Field
                  required
                  name='cep'
                  type='text'
                  onBlur={(event) => onBlurCep(event, setFieldValue)}
                />
              </div>

              <div className={styles.formControlGrup}>
                <label>Logradouro</label>
                <Field name='logradouro' type='text' />
              </div>

              <div className={styles.formControlGrup}>
                <label>Número</label>
                <Field name='numero' type='text' required />
              </div>

              <div className={styles.formControlGrup}>
                <label>Complemento</label>
                <Field name='complemento' type='text' />
              </div>

              <div className={styles.formControlGrup}>
                <label>Bairro</label>
                <Field name='bairro' type='text' />
              </div>

              <div className={styles.formControlGrup}>
                <label>Cidade</label>
                <Field name='cidade' type='text' />
              </div>

              <div className={styles.formControlGrup}>
                <label>Estado</label>
                <Field component='select' name='uf' className={styles.select}>
                  <option value={null}>Selecione o Estado</option>
                  <option value='RO'>Rondônia</option>
                  <option value='AC'>Acre</option>
                  <option value='AM'>Amazonas</option>
                  <option value='RR'>Roraima</option>
                  <option value='PA'>Pará</option>
                  <option value='AP'>Amapá</option>
                  <option value='TO'>Tocantins</option>
                  <option value='MA'>Maranhão</option>
                  <option value='PI'>Piauí</option>
                  <option value='CE'>Ceará</option>
                  <option value='RN'>Rio Grande do Norte</option>
                  <option value='PB'>Paraíba</option>
                  <option value='PE'>Pernambuco</option>
                  <option value='RS'>Alagoas</option>
                  <option value='SE'>Sergipe</option>
                  <option value='BA'>Bahia</option>
                  <option value='MG'>Minas Gerais </option>
                  <option value='ES'>Espírito Santo </option>
                  <option value='RJ'>Rio de Janeiro </option>
                  <option value='SP'>São Paulo</option>
                  <option value='PR'>Paraná</option>
                  <option value='SC'>Santa Catarina</option>
                  <option value='RS'>Rio Grande do Sul</option>
                  <option value='MS'>Mato Grosso do Sul</option>
                  <option value='MT'>Mato Grosso</option>
                  <option value='GO'>Goiás</option>
                  <option value='DF'>Distrito Federal</option>
                </Field>
              </div>
              <Button type='submit'>Enviar</Button>
              <Persist name='@healthy-food' />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
