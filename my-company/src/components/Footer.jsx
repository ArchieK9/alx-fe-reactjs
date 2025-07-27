function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f2f2f2',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      borderTop: '1px solid #ccc',
      marginTop: '20px'
    }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
