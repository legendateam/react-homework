import User from "../user/User";

export default function Users({items, appfn1, appfn2, appfn12}) {
    return (
        <div>
            {
                items.map(value => <User key={value.id} item={value} funcPosts={appfn1}
                                         funcUsers={appfn2} callback={appfn12}/>)
            }
        </div>
    )
};