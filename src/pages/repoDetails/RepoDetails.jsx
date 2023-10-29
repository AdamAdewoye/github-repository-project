// import React from 'react'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'

const RepoDetails = () => {
  return (
    <ErrorBoundary>
    <div>Single Repo
            {
            
            /* <div className="single">
 
             <div className="single__header">
                   
                <div     >

                    <img src={avatar_url} className={styles.img}/>
                    <p>{login}</p>
                </div>
                <div className={styles.time}><p><Clock/></p><p>{format(updated_at)}</p></div>
                 
             </div>
             <div className="single__body">

                        <p className="single__name">{description ?<p>{description}</p>:<p>{name} project</p>}</p>
                        
                        
                        <p className="single__socials">
                                <BiGitRepoForked className='single__icons'/>:
                                <p>{forks}</p>

                                
                            </p>
                            <p>
                            <p className="single__socials">
                                <Link className='single__icons'/>

                                <NavLink to={html_url} className="single__link">{html_url} </NavLink>
                            </p>

                        </p>
                        {language === "JavaScript"?
                        <>
                        <p><Language/>Html and css</p>
                        <p><Language/>{language}</p>
                        </>
                        :language && <p><Language/>{language}</p>}
                        {!language && <p><Language/> programmer</p> }
                       

                    </div>
            </div> */}
        </div>
    </ErrorBoundary>
  )
}

export default RepoDetails
