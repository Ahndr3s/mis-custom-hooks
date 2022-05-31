#useForm
Ejemplo de uso:

```
    const intialFrom = {
        name: '',
        age: 0,
        email: ''
    }
    const [formvalues, handInputChange, rest] = useForm( initialForm )
```