import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Categoriesbar from '../../components/categoriesbar/Categoriesbar'
import Videos from '../../components/videos/Videos'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPopulerVideos } from '../../redux/actions/videos.action'
export default function HomeScreen() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopulerVideos())
    }, [dispatch])
const {videos}=useSelector(state=>state.homepagedata)

    return (
        <Container>
            <Categoriesbar />

            <Row>
                {
                    videos.map((video) => (
                        <Col lg={3} md={4} >
                            <Videos  video={video} key={video.id}/>
                        </Col>
                    ))
                }

            </Row>

        </Container>
    )
}
