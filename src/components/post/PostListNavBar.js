import React from 'react'
import navPostTypes from '../../content/navPostTypes';
import NavLink from '../navigation/NavLink';
import Container from '../utilities/container/Container';

const PostListNavBar = () => {
  return (
    <Container className=" text-secondary-20 flex gap-5 flex-wrap">
        {navPostTypes.map((navType, index) => {
          return (
            <NavLink
              to={navType.to}
              children={navType.text}
              className={`text-base lg:text-xl xl:text-2xl 2xl:text-3xl leading-[24px] md:text-lg text-center !text-secondary-20 hover:!text-primary-100 font-medium`}
              key={index}
            />
          );
        })}
    </Container>
  )
}

export default PostListNavBar