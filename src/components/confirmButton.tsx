import Button from 'react-bootstrap/Button';

const VariantsSample = ( ) => {
    return (
        <div>
      <style type="text/css">
        {`
      .btn-flat {
        background-color: purple;
        color: white;
      }
  
      .btn-lg {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
      }
      `}
        </style>
  
        <Button variant="flat" size="lg">
          flat button
        </Button>
      </div>
    )
};

export default VariantsSample;