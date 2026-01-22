import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section-padding" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Vamos Trabalhar Juntos</h2>
          <p className="section-subtitle">
            Tem um projeto em mente? Entre em contato e vamos transformá-lo em realidade
          </p>
        </div>

        <div className="contact-wrapper">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Seu nome" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="seu@email.com" />
              </div>
            </div>

            <div className="form-group">
              <label>Assunto</label>
              <input type="text" placeholder="Como posso ajudar?" />
            </div>

            <div className="form-group">
              <label>Mensagem</label>
              <textarea rows="5" placeholder="Conte-me sobre seu projeto..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              Enviar Mensagem
            </button>
          </form>

          <div className="contact-info">
            <div className="info-card">
              <div className="icon-box-small">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p>franklinferreira280@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box-small">
                <Phone size={24} />
              </div>
              <div className="info-text">
                <h4>Telefone</h4>
                <p>+55 (75) 99196-4091</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box-small">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h4>Localização</h4>
                <p>Barrocas, Bahia, Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;