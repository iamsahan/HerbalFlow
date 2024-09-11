import React from 'react';
import kothalaHimbutuImage from '../assets/images/download.jpeg';

const HomePage = () => {
  return (
    <div style={styles.appContainer}>
      
      <header style={styles.header}>
        <div style={styles.logo}>
          <h1 style={styles.logoText}>HERBAL FLOW</h1>
        </div>
        <nav style={styles.navMenu}>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#shop" style={styles.navLink}>Shop</a>
          <a href="#about" style={styles.navLink}>About us</a>
          <a href="/inventory" style={styles.navLink}>Login</a>
        </nav>
        <div style={styles.socialIcons}>
          
        </div>
      </header>


      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>ALL FOR YOUR HEALTH</h2>
          <p style={styles.heroSubtitle}>Embrace the essence of Ayurveda with our authentic Sri Lankan herbs.</p>
          <button style={styles.heroButton}>Shop Now</button>
        </div>
       
      </section>

      
      <section style={styles.productSection}>
        <h3 style={styles.sectionTitle}>ORDER NOW!</h3>
        <div style={styles.products}>
          <div style={styles.productCard}>
            <img style={styles.productImage} src={kothalaHimbutuImage} alt="Kothala Himbutu" />
            <h4 style={styles.productName}>Kothala Himbutu</h4>
            <p style={styles.productPrice}>LKR 1450</p>
          </div>
          <div style={styles.productCard}>
            <img style={styles.productImage} src={kothalaHimbutuImage} alt="Beli Mal" />
            <h4 style={styles.productName}>Beli Mal</h4>
            <p style={styles.productPrice}>LKR 1450</p>
          </div>
          <div style={styles.productCard}>
            <img style={styles.productImage} src={kothalaHimbutuImage} alt="Ranawara" />
            <h4 style={styles.productName}>Ranawara</h4>
            <p style={styles.productPrice}>LKR 1450</p>
          </div>
        </div>
      </section>

   
      <section style={styles.infoSection}>
        <div style={styles.infoCard}>
          <img style={styles.infoImage} src={kothalaHimbutuImage} alt="Aloe Vera" />
          <h4 style={styles.infoTitle}>Aloe Vera</h4>
          <p style={styles.infoDescription}>Cooling plant that aids digestion and boosts skin health.</p>
        </div>
        <div style={styles.infoCard}>
          <img style={styles.infoImage} src={kothalaHimbutuImage} alt="Gotu Kola" />
          <h4 style={styles.infoTitle}>Gotu Kola</h4>
          <p style={styles.infoDescription}>Herb for memory and cognitive health with many other benefits.</p>
        </div>
        <div style={styles.infoCard}>
          <img style={styles.infoImage} src={kothalaHimbutuImage} alt="Iramusu" />
          <h4 style={styles.infoTitle}>Iramusu</h4>
          <p style={styles.infoDescription}>Used for skin allergies, purifies blood, and balances body fluids.</p>
        </div>
      </section>

    
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerAbout}>
            <h3>Herbal Flow</h3>
            <p>We bring you Sri Lankan Ayurveda at its best.</p>
          </div>
          <div style={styles.footerDownload}>
            <h4>Download</h4>
            <a href="#">iOS App</a>
            <a href="#">Android App</a>
          </div>
          <div style={styles.footerContact}>
            <h4>Contact Us</h4>
            <p>Email: info@herbalflow.com</p>
            <p>Phone: 011 9457 432</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#b5e550',
  },
  logo: {
    flexGrow: 1,
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navMenu: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '18px',
  },
  hero: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f3f3f3',
    backgroundImage: 'url("hero-image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heroContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'inline-block',
    padding: '40px 60px',
  },
  heroTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  heroButton: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  productSection: {
    padding: '60px 20px',
    textAlign: 'center',
    
  },
  sectionTitle: {
    fontSize: '28px',
    marginBottom: '40px',
  },
  products: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  productCard: {
    width: '200px',
    textAlign: 'center',
  },
  productImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '15px',
  },
  productName: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: '16px',
    color: '#666',
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '60px 20px',
    backgroundColor: '#e9ecef',
  },
  infoCard: {
    textAlign: 'center',
    width: '30%',
  },
  infoImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '15px',
  },
  infoTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  infoDescription: {
    fontSize: '16px',
    color: '#666',
  },
  footer: {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  footerAbout: {
    width: '30%',
  },
  footerDownload: {
    width: '30%',
  },
  footerContact: {
    width: '30%',
  },
};

export default HomePage;
