const conf = {
        appWriteUrl : String(import.meta.env.VITE_APPWRITE_API_END_POINT),
        projectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
        dataBaseId : String(import.meta.env.VITE_APPWRITE_DATA_BASE_ID),
        collectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
        bucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf