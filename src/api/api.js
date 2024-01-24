export default async function searchSkills(data) {
        console.log(data)
        const params = new URLSearchParams({q: data})
        console.log(`${process.env.REACT_APP_GET_SKILLS}?${params}`)
        const res = await fetch(`${process.env.REACT_APP_GET_SKILLS}?${params}`);

        if(!res.ok) {
            throw new Error(res.statusText);
        }

        return await res.json();
}

