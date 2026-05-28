import behance from '../assets/icons/social-media-links/behance.svg'
import github from '../assets/icons/social-media-links/github.svg'
import leetcode from '../assets/icons/social-media-links/leetcode.svg'
const links = [
    {id:1, name: 'behance', icon:behance},
    {id:2, name: 'github', icon:github},
    {id:3, name: 'leetcode', icon:leetcode},
]
const Links = () => {
    return (
        <div className="links-container">
            <div>
                {links.map(item => (
                    <div className='link-item-container'>
                        <p> {item.name} </p>
                        <img src ={item.icon}/>
                    </div>
                ))}
            </div>
            <div className="text-container">
               TEXT
            </div>
            </div>
    )

}
export default Links;