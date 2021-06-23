import * as faceapi from '../dist/face-api'

export default function detect() {
    faceapi.loadAgeGenderModel()
}