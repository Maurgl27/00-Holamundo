import './app.css';
import './twitterFallowCard'
import { TwitterFollowCard } from './twitterFallowCard';
export function App (){
    const format=(userName)=>`@${userName}`;
    return(
        <section className='app'>
            <TwitterFollowCard formatUserName={format} userName="Midudev" name="Miguel Angel duran" isFollowing={true}/>
            <TwitterFollowCard formatUserName={format} userName="Maurgl27" name="Miguel Hernandez" isFollowing/>
        </section>
    )
}