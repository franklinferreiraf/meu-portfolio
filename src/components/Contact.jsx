import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  // Estado para armazenar os dados do formulário (preparando para o futuro)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui entra a lógica de envio depois (ex: console.log para testar)
    console.log("Dados do formulário:", formData);
    alert("Obrigado pela mensagem! (Funcionalidade de envio em desenvolvimento)");
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Vamos Trabalhar Juntos</h2>
          <p>Tem um projeto em mente? Entre em contato e vamos transformá-lo em realidade</p>
        </div>

        <div className="contact-wrapper">
          {/* Lado Esquerdo: Formulário */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <div style={{display:'flex', flexDirection:'column', gap: '0.5rem', textAlign: 'left'}}>
                <label style={{fontSize: '0.9rem', fontWeight: 600}}>Nome</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Seu nome" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{display:'flex', flexDirection:'column', gap: '0.5rem', textAlign: 'left'}}>
                <label style={{fontSize: '0.9rem', fontWeight: 600}}>Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="seu@email.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div style={{display:'flex', flexDirection:'column', gap: '0.5rem', textAlign: 'left'}}>
              <label style={{fontSize: '0.9rem', fontWeight: 600}}>Assunto</label>
              <input 
                type="text" 
                name="subject"
                placeholder="Como posso ajudar?" 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{display:'flex', flexDirection:'column', gap: '0.5rem', textAlign: 'left'}}>
              <label style={{fontSize: '0.9rem', fontWeight: 600}}>Mensagem</label>
              <textarea 
                rows="5" 
                name="message"
                placeholder="Conte-me sobre seu projeto..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{width: '100%', justifyContent: 'center', marginTop: '0.5rem'}}>
              <Send size={18} style={{marginRight: '8px'}} /> Enviar Mensagem
            </button>
          </form>

          {/* Lado Direito: Informações de Contato */}
          <div className="contact-info-list">
            <div className="contact-card">
              <div className="icon-wrapper">
                 <Mail size={24} />
              </div>
              <div style={{textAlign: 'left'}}>
                <h4 style={{fontWeight: 600, marginBottom: '0.2rem'}}>Email</h4>
                <a href="mailto:franklinferreira280@gmail.com" style={{color: 'var(--text-secondary)', textDecoration: 'none'}}>
                  franklinferreira280@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-wrapper">
                 <Phone size={24} />
              </div>
              <div style={{textAlign: 'left'}}>
                <h4 style={{fontWeight: 600, marginBottom: '0.2rem'}}>Telefone</h4>
                <p style={{color: 'var(--text-secondary)', margin: 0}}>+55 (11) 99999-9999</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-wrapper">
                 <MapPin size={24} />
              </div>
              <div style={{textAlign: 'left'}}>
                <h4 style={{fontWeight: 600, marginBottom: '0.2rem'}}>Localização</h4>
                <p style={{color: 'var(--text-secondary)', margin: 0}}>São Paulo, Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;