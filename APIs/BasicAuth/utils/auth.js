function decodeBasicAuth(authHeader) {
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');
    return {username, password};
}

module.exports = { decodeBasicAuth };