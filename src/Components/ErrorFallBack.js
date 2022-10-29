
export default function ErrorFallback  ({error}) {
    return (
    <div role='alert'>
        <p style={{color: 'black', fontSize: '20px', width :'fitContent', margin: '0 auto' }}>Something went wrong:</p>
        <pre style={{color:'red', margin: '0 auto'}}>{error.message}</pre>
    </div>
    )
}