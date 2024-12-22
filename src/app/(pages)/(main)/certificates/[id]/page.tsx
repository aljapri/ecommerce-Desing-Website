import { useRouter } from 'next/router';

// Simulated certificates data
const certificates = [
  { id: '123', name: 'Certificate A', description: 'This is Certificate A' },
  { id: '456', name: 'Certificate B', description: 'This is Certificate B' },
  { id: '789', name: 'Certificate C', description: 'This is Certificate C' },
];

const CertificatePage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic `id` from the URL

  // Find the certificate with the matching id
  const certificate = certificates.find(cert => cert.id === id);

  return (
    <div>
      {certificate ? (
        <div>
            
          {/* Here you can display the certificate details or PDF */}
        </div>
      ) : (
        <div>
          <h1>No certificate found with this ID</h1>
          <p>Please check the certificate ID and try again.</p>
        </div>
      )}
    </div>
  );
};

export default CertificatePage;
