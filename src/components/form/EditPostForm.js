import blogApi from 'api/blogApi';
import Button from 'components/utilities/button/Button';
import Input from 'components/utilities/form/Input'
// import Title from 'components/utilities/text/Title'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditPostForm = () => {
    // const navigate = useNavigate()
    const {blogId} = useParams()
    useEffect(() => {
        const getBlogDetail = async() => {
            const response = await blogApi.getBlogDetail(blogId);
            console.log(response)
        }
        getBlogDetail()

    }, [blogId])
    const [title, setTitle] = useState();
    // const [banner, setBanner] = useState()
    // const [category, setCategory] = useState();
    // const [content, setContent] = useState()

  return (
    <form>
        <Input type='text' value={title} onChange={e => setTitle(e.target.value)} label="Title" fluid/>
        <Input type='text' value={title} onChange={e => setTitle(e.target.value)} label="Banner" fluid/>
        <Input type='text' value={title} onChange={e => setTitle(e.target.value)} label="Category" fluid/>
        <Input type='text' value={title} onChange={e => setTitle(e.target.value)} label="Content" fluid/>

        <Button primary fluid>
            Update
        </Button>
    </form>
  )
}

export default EditPostForm