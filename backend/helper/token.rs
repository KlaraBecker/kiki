use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};

pub struct JwtSigner {
    encoding_key: EncodingKey,
    decoding_key: DecodingKey<'static>,
}

impl JwtSigner {
    pub fn new() -> Self {
        let secret = std::env::var("KEY").expect("KEY must be set");
        let encoding_key = EncodingKey::from_secret(secret.as_ref());
        let decoding_key = DecodingKey::from_secret(secret.as_ref());

        Self {
            encoding_key,
            decoding_key,
        }
    }

    pub fn sign(&self, address: &str, ip: &str) -> String {
        let claims = jsonwebtoken::Claims {
            sub: address.to_owned(),
            aud: Some(ip.to_owned()),
            exp: (chrono::Utc::now() + chrono::Duration::hours(24)).timestamp(),
            ..Default::default()
        };

        encode(&Header::default(), &claims, &self.encoding_key).unwrap()
    }

    pub fn verify(&self, token: &str) -> Option<jsonwebtoken::TokenData<jsonwebtoken::Claims>> {
        decode::<jsonwebtoken::Claims>(
            token,
            &self.decoding_key,
            &Validation::default(),
        )
        .ok()
    }
}
