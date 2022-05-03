export default function orgFilter(data) {
    let filter = {}
    Object.keys(data).forEach((key) => {
        if (data[key] !== 'Departamento' && data[key] !== 'Ciudad' && data[key] !== 'Campo' && data[key] !== null) {
            filter[key] = data[key]
        }

    })
    return filter

}
