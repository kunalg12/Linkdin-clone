import { Avatar } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import React, {forwardRef} from 'react';
import InputOptions from './InputOption';
import './Post.css';
import { ChatOutlined, SendOutlined, ShareOutlined } from '@mui/icons-material';

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                 <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOptions Icon={ThumbUpAltOutlinedIcon} title='like' color='grey'/>
            <InputOptions Icon={ChatOutlined} title='Comment' color='grey'/>
            <InputOptions Icon={ShareOutlined} title='Share' color='grey'/>
            <InputOptions Icon={SendOutlined} title='Send' color='grey'/>
        </div>
    </div>
  )
});

export default Post;