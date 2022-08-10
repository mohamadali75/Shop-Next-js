import { useRouter } from 'next/router'
import React from 'react'
import { css} from '@emotion/css'

function Post() {
  const router = useRouter()
  const { params } = router.query

  return <div className={css`
  text-align:center;
}
}
`}><img className={css`
  display: block;
margin-left: auto;
margin-right: auto;
width: 200px;
height:200px;
}
}
`}
alt='monster'
src={`https://robohash.org/${params}`}
/><br/>
<div className={css`
  font-family: 'Courgette', cursive;
font-family: 'Edu VIC WA NT Beginner', cursive;font-size:30px;
font-size:60px;
}
}
`}>{params}</div>
<div className={css`
  font-family: 'Courgette', cursive;
font-family: 'Edu VIC WA NT Beginner', cursive;font-size:30px;
}
}
`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sequi obcaecati aut dolorem labore beatae assumenda incidunt, eveniet aperiam nihil iste vel, ratione cumque expedita, impedit deleniti libero nam quas?</div></div>
}

export default Post
