(()=>{var Yd=Object.defineProperty;var jo=(i,t)=>{for(var e in t)Yd(i,e,{get:t[e],enumerable:!0})};var Lh=0,Rl=1,Dh=2;var lr=1,Nh=2,gs=3,gi=0,je=1,pn=2,Gn=0,_s=1,Il=2,Pl=3,Ll=4,Uh=5;var Ni=100,Fh=101,Oh=102,Bh=103,zh=104,kh=200,Vh=201,Gh=202,Hh=203,Dl=204,Nl=205,Wh=206,Xh=207,qh=208,Yh=209,$h=210,Zh=211,Jh=212,Kh=213,jh=214,ea=0,na=1,ia=2,us=3,sa=4,ra=5,aa=6,oa=7,Ul=0,Qh=1,tu=2,En=0,Fl=1,Ol=2,Bl=3,zl=4,kl=5,Vl=6,Gl=7;var Hl=300,_i=301,Ui=302,Oa=303,Ba=304,cr=306,la=1e3,On=1001,ca=1002,ke=1003,eu=1004;var hr=1005;var De=1006,za=1007;var xi=1008;var hn=1009,Wl=1010,Xl=1011,xs=1012,ka=1013,Tn=1014,An=1015,Cn=1016,Va=1017,Ga=1018,ys=1020,ql=35902,Yl=35899,$l=1021,Zl=1022,mn=1023,Bn=1026,yi=1027,Jl=1028,Ha=1029,vi=1030,Wa=1031;var Xa=1033,ur=33776,dr=33777,fr=33778,pr=33779,qa=35840,Ya=35841,$a=35842,Za=35843,Ja=36196,Ka=37492,ja=37496,Qa=37488,to=37489,mr=37490,eo=37491,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,ho=37816,uo=37817,fo=37818,po=37819,mo=37820,go=37821,_o=36492,xo=36494,yo=36495,vo=36283,Mo=36284,gr=36285,So=36286;var ks=2300,ha=2301,jr=2302,bl=2303,wl=2400,El=2401,Tl=2402;var nu=3200;var Kl=0,iu=1,ti="",ze="srgb",Vs="srgb-linear",Gs="linear",_e="srgb";var Qr=7680;var su=519,ru=512,au=513,ou=514,bo=515,lu=516,cu=517,wo=518,hu=519,jl=35044;var Ql="300 es",Sn=2e3,Hs=2001;function $d(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uu(){let i=Ws("canvas");return i.style.display="block",i}var oh={},ds=null;function Xs(...i){let t="THREE."+i.shift();ds?ds("log",t,...i):console.log(t,...i)}function du(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=du(i);let t="THREE."+i.shift();if(ds)ds("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=du(i);let t="THREE."+i.shift();if(ds)ds("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Pi(...i){let t=i.join(" ");t in oh||(oh[t]=!0,Zt(...i))}function fu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pu={[ea]:na,[ia]:aa,[sa]:oa,[us]:ra,[na]:ea,[aa]:ia,[oa]:sa,[ra]:us},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ta=Math.PI/180,ua=180/Math.PI;function li(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function Jd(i,t){return(i%t+t)%t}function Qo(i,t,e){return(1-e)*i+e*t}function Un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var sc=class sc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sc.prototype.isVector2=!0;var le=sc,kn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*x;m<0&&(h=-h,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let T=Math.acos(m),A=Math.sin(T);p=Math.sin(p*T)/A,o=Math.sin(o*T)/A,c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+x*o}else{c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+x*o;let T=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=T,l*=T,u*=T,d*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-o*f,t[e+2]=l*g+u*f+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rc=class rc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rc.prototype.isVector3=!0;var q=rc,tl=new q,lh=new kn,ac=class ac{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],T=s[1],A=s[4],M=s[7],w=s[2],E=s[5],L=s[8];return r[0]=a*x+o*T+c*w,r[3]=a*m+o*A+c*E,r[6]=a*p+o*M+c*L,r[1]=l*x+u*T+d*w,r[4]=l*m+u*A+d*E,r[7]=l*p+u*M+d*L,r[2]=h*x+f*T+g*w,r[5]=h*m+f*A+g*E,r[8]=h*p+f*M+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(el.makeScale(t,e)),this}rotate(t){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(el.makeRotation(-t)),this}translate(t,e){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ac.prototype.isMatrix3=!0;var ee=ac,el=new ee,ch=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kd(){let i={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_e&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_e&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vs]:{primaries:t,whitePoint:n,transfer:Gs,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var ce=Kd();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yi===void 0&&(Yi=Ws("canvas")),Yi.width=t.width,Yi.height=t.height;let s=Yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ws("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jd=0,fs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nl(s[a].image)):r.push(nl(s[a]))}else r=nl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var Qd=0,il=new q,Ve=class i extends zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=On,s=On,r=De,a=xi,o=mn,c=hn,l=i.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=li(),this.name="",this.source=new fs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case la:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case la:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Hl;Ve.DEFAULT_ANISOTROPY=1;var oc=class oc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,M=(f+1)/2,w=(p+1)/2,E=(u+h)/4,L=(d+x)/4,y=(g+m)/4;return A>M&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=L/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=y/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=L/r,s=y/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-x)/T,this.z=(h-u)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};oc.prototype.isVector4=!0;var Ae=oc,fa=class extends zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ve(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new fs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends fa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qs=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fa=class Fa{constructor(t,e,n,s,r,a,o,c,l,u,d,h,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,d,h,f,g,x,m)}set(t,e,n,s,r,a,o,c,l,u,d,h,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,x=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-x*l,e[9]=-o*c,e[2]=x-h*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h+x*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=x+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h-x*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,x=o*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,f=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){let h=a*c,f=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ii.crossVectors(n,an),ii.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ii.crossVectors(n,an)),ii.normalize(),Er.crossVectors(an,ii),s[0]=ii.x,s[4]=Er.x,s[8]=an.x,s[1]=ii.y,s[5]=Er.y,s[9]=an.y,s[2]=ii.z,s[6]=Er.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],T=n[3],A=n[7],M=n[11],w=n[15],E=s[0],L=s[4],y=s[8],C=s[12],D=s[1],G=s[5],N=s[9],O=s[13],I=s[2],U=s[6],J=s[10],H=s[14],rt=s[3],K=s[7],j=s[11],at=s[15];return r[0]=a*E+o*D+c*I+l*rt,r[4]=a*L+o*G+c*U+l*K,r[8]=a*y+o*N+c*J+l*j,r[12]=a*C+o*O+c*H+l*at,r[1]=u*E+d*D+h*I+f*rt,r[5]=u*L+d*G+h*U+f*K,r[9]=u*y+d*N+h*J+f*j,r[13]=u*C+d*O+h*H+f*at,r[2]=g*E+x*D+m*I+p*rt,r[6]=g*L+x*G+m*U+p*K,r[10]=g*y+x*N+m*J+p*j,r[14]=g*C+x*O+m*H+p*at,r[3]=T*E+A*D+M*I+w*rt,r[7]=T*L+A*G+M*U+w*K,r[11]=T*y+A*N+M*J+w*j,r[15]=T*C+A*O+M*H+w*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],T=c*f-l*h,A=o*f-l*d,M=o*h-c*d,w=a*f-l*u,E=a*h-c*u,L=a*d-o*u;return e*(x*T-m*A+p*M)-n*(g*T-m*w+p*E)+s*(g*A-x*w+p*L)-r*(g*M-x*E+m*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],T=e*o-n*a,A=e*c-s*a,M=e*l-r*a,w=n*c-s*o,E=n*l-r*o,L=s*l-r*c,y=u*x-d*g,C=u*m-h*g,D=u*p-f*g,G=d*m-h*x,N=d*p-f*x,O=h*p-f*m,I=T*O-A*N+M*G+w*D-E*C+L*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=(o*O-c*N+l*G)*U,t[1]=(s*N-n*O-r*G)*U,t[2]=(x*L-m*E+p*w)*U,t[3]=(h*E-d*L-f*w)*U,t[4]=(c*D-a*O-l*C)*U,t[5]=(e*O-s*D+r*C)*U,t[6]=(m*M-g*L-p*A)*U,t[7]=(u*L-h*M+f*A)*U,t[8]=(a*N-o*D+l*y)*U,t[9]=(n*D-e*N-r*y)*U,t[10]=(g*E-x*M+p*T)*U,t[11]=(d*M-u*E-f*T)*U,t[12]=(o*C-a*G-c*y)*U,t[13]=(e*G-n*C+s*y)*U,t[14]=(x*A-g*w-m*T)*U,t[15]=(u*w-d*A+h*T)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,g=r*d,x=a*u,m=a*d,p=o*d,T=c*l,A=c*u,M=c*d,w=n.x,E=n.y,L=n.z;return s[0]=(1-(x+p))*w,s[1]=(f+M)*w,s[2]=(g-A)*w,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(h+p))*E,s[6]=(m+T)*E,s[7]=0,s[8]=(g+A)*L,s[9]=(m-T)*L,s[10]=(1-(h+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),c=$i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);let l=1/a,u=1/o,d=1/c;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Sn,c=!1){let l=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Sn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Hs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Sn,c=!1){let l=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Sn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Hs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fa.prototype.isMatrix4=!0;var Te=Fa,$i=new q,xn=new Te,tf=new q(0,0,0),ef=new q(1,1,1),ii=new q,Er=new q,an=new q,uh=new Te,dh=new kn,ci=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nf=0,fh=new q,Zi=new kn,Yn=new Te,Tr=new q,Ls=new q,sf=new q,rf=new kn,ph=new q(1,0,0),mh=new q(0,1,0),gh=new q(0,0,1),_h={type:"added"},af={type:"removed"},Ji={type:"childadded",child:null},sl={type:"childremoved",child:null},en=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new q,e=new ci,n=new kn,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new ee}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return fh.copy(t).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ls,Tr,this.up):Yn.lookAt(Tr,Ls,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_h),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(af),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_h),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new q(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},of={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(of)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function rl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=Jd(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=rl(a,r,t+1/3),this.g=rl(a,r,t),this.b=rl(a,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return ce.workingToColorSpace(He.copy(this),t),Math.round(he(He.r*255,0,255))*65536+Math.round(he(He.g*255,0,255))*256+Math.round(he(He.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=ze){ce.workingToColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Ar);let n=Qo(si.h,Ar.h,e),s=Qo(si.s,Ar.s,e),r=Qo(si.l,Ar.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new se;se.NAMES=mu;var $s=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yn=new q,$n=new q,al=new q,Zn=new q,Ki=new q,ji=new q,xh=new q,ol=new q,ll=new q,cl=new q,hl=new Ae,ul=new Ae,dl=new Ae,Fn=class i{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),$n.subVectors(n,e),al.subVectors(t,e);let a=yn.dot(yn),o=yn.dot($n),c=yn.dot(al),l=$n.dot($n),u=$n.dot(al),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return hl.setScalar(0),ul.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,n),dl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(hl,r.x),a.addScaledVector(ul,r.y),a.addScaledVector(dl,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),$n.subVectors(t,e),yn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),yn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),ji.subVectors(r,n),ol.subVectors(t,n);let c=Ki.dot(ol),l=ji.dot(ol);if(c<=0&&l<=0)return e.copy(n);ll.subVectors(t,s);let u=Ki.dot(ll),d=ji.dot(ll);if(u>=0&&d<=u)return e.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Ki,a);cl.subVectors(t,r);let f=Ki.dot(cl),g=ji.dot(cl);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ji,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return xh.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(xh,o);let p=1/(m+x+h);return a=x*p,o=h*p,e.copy(n).addScaledVector(Ki,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hi=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),Rr.subVectors(this.max,Ds),Qi.subVectors(t.a,Ds),ts.subVectors(t.b,Ds),es.subVectors(t.c,Ds),ri.subVectors(ts,Qi),ai.subVectors(es,ts),Ai.subVectors(Qi,es);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ai.z,Ai.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ai.z,0,-Ai.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ai.y,Ai.x,0];return!fl(e,Qi,ts,es,Rr)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,Qi,ts,es,Rr))?!1:(Ir.crossVectors(ri,ai),e=[Ir.x,Ir.y,Ir.z],fl(e,Qi,ts,es,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new q,new q,new q,new q,new q,new q,new q,new q],vn=new q,Cr=new hi,Qi=new q,ts=new q,es=new q,ri=new q,ai=new q,Ai=new q,Ds=new q,Rr=new q,Ir=new q,Ci=new q;function fl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),c=t.dot(Ci),l=e.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Le=new q,Pr=new le,lf=0,Ne=class extends zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Zs=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Js=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Je=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},cf=new hi,Ns=new q,pl=new q,Li=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(pl)),this.expandByPoint(Ns.copy(t.center).sub(pl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hf=0,fn=new Te,ml=new en,ns=new q,on=new hi,Us=new hi,Be=new q,Ke=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($d(t)?Js:Zs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return ml.lookAt(t),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(on.min,Us.min),on.expandByPoint(Be),Be.addVectors(on.max,Us.max),on.expandByPoint(Be)):(on.expandByPoint(Us.min),on.expandByPoint(Us.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Be.fromBufferAttribute(o,l),c&&(ns.fromBufferAttribute(t,l),Be.add(ns)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ne(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new q,c[y]=new q;let l=new q,u=new q,d=new q,h=new le,f=new le,g=new le,x=new q,m=new q;function p(y,C,D){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,D),h.fromBufferAttribute(r,y),f.fromBufferAttribute(r,C),g.fromBufferAttribute(r,D),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let G=1/(f.x*g.y-g.x*f.y);isFinite(G)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(G),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(G),o[y].add(x),o[C].add(x),o[D].add(x),c[y].add(m),c[C].add(m),c[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let y=0,C=T.length;y<C;++y){let D=T[y],G=D.start,N=D.count;for(let O=G,I=G+N;O<I;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let A=new q,M=new q,w=new q,E=new q;function L(y){w.fromBufferAttribute(s,y),E.copy(w);let C=o[y];A.copy(C),A.sub(w.multiplyScalar(w.dot(C))).normalize(),M.crossVectors(E,C);let G=M.dot(c[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,G)}for(let y=0,C=T.length;y<C;++y){let D=T[y],G=D.start,N=D.count;for(let O=G,I=G+N;O<I;O+=3)L(t.getX(O+0)),L(t.getX(O+1)),L(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new q,r=new q,a=new q,o=new q,c=new q,l=new q,u=new q,d=new q;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Ne(h,u,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ma=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ze=new q,Ks=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Xs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Xs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gl=new q,uf=new q,df=new ee,Mn=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gl.subVectors(n,e).cross(uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(gl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||df.getNormalMatrix(t),s=this.coplanarPoint(gl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ff=0,Qn=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=li(),this.name="",this.type="Material",this.blending=_s,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=Nl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ui=class extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},is,Fs=new q,ss=new q,rs=new q,as=new le,Os=new le,gu=new Te,Lr=new q,Bs=new q,Dr=new q,yh=new le,_l=new le,vh=new le,Di=class extends en{constructor(t=new ui){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ma(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new Ks(n,3,0,!1)),is.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=is,this.material=t,this.center=new le(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),gu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Nr(Lr.set(-.5,-.5,0),rs,a,ss,s,r),Nr(Bs.set(.5,-.5,0),rs,a,ss,s,r),Nr(Dr.set(.5,.5,0),rs,a,ss,s,r),yh.set(0,0),_l.set(1,0),vh.set(1,1);let o=t.ray.intersectTriangle(Lr,Bs,Dr,!1,Fs);if(o===null&&(Nr(Bs.set(-.5,.5,0),rs,a,ss,s,r),_l.set(0,1),o=t.ray.intersectTriangle(Lr,Dr,Bs,!1,Fs),o===null))return;let c=t.ray.origin.distanceTo(Fs);c<t.near||c>t.far||e.push({distance:c,point:Fs.clone(),uv:Fn.getInterpolation(Fs,Lr,Bs,Dr,yh,_l,vh,new le),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Nr(i,t,e,n,s,r){as.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Os.x=r*as.x-s*as.y,Os.y=s*as.x+r*as.y):Os.copy(as),i.copy(t),i.x+=Os.x,i.y+=Os.y,i.applyMatrix4(gu)}var Kn=new q,xl=new q,Ur=new q,Fr=new q,js=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xl.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Fr.copy(this.origin).sub(xl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ur),o=Fr.dot(this.direction),c=-Fr.dot(Ur),l=Fr.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xl).addScaledVector(Ur,h),f}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,x=e.y-a.y,m=e.z-a.z,p=n.x-a.x,T=n.y-a.y,A=n.z-a.z,M=Math.abs(c),w=Math.abs(l),E=Math.abs(u),L,y,C,D,G,N,O,I,U,J,H,rt;if(M>=w&&M>=E?(C=c,N=d,U=g,rt=p,c>=0?(L=l,y=u,D=h,G=f,O=x,I=m,J=T,H=A):(L=u,y=l,D=f,G=h,O=m,I=x,J=A,H=T)):w>=E?(C=l,N=h,U=x,rt=T,l>=0?(L=u,y=c,D=f,G=d,O=m,I=g,J=A,H=p):(L=c,y=u,D=d,G=f,O=g,I=m,J=p,H=A)):(C=u,N=f,U=m,rt=A,u>=0?(L=c,y=l,D=d,G=h,O=g,I=x,J=p,H=T):(L=l,y=c,D=h,G=d,O=x,I=g,J=T,H=p)),C===0)return null;let K=L/C,j=y/C,at=1/C,pt=D-K*N,ht=G-j*N,vt=O-K*U,dt=I-j*U,Pt=J-K*rt,Z=H-j*rt,it=Pt*dt-Z*vt,xt=pt*Z-ht*Pt,Mt=vt*ht-dt*pt;if(s){if(it<0||xt<0||Mt<0)return null}else if((it<0||xt<0||Mt<0)&&(it>0||xt>0||Mt>0))return null;let mt=it+xt+Mt;if(mt===0)return null;let Lt=at*(it*N+xt*U+Mt*rt);return(mt>0?Lt<0:Lt>0)?null:this.at(Lt/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wn=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mh=new Te,Ri=new js,Or=new Li,Sh=new q,Br=new q,zr=new q,kr=new q,yl=new q,Vr=new q,bh=new q,Gr=new q,Pe=class extends en{constructor(t=new Ke,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(yl.fromBufferAttribute(d,t),a?Vr.addScaledVector(yl,u):Vr.addScaledVector(yl.sub(e),u))}e.add(Vr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Or.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Or,Sh)===null||Ri.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(Mh.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(Mh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,w=A;M<w;M+=3){let E=o.getX(M),L=o.getX(M+1),y=o.getX(M+2);s=Hr(this,p,t,n,l,u,d,E,L,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let T=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);s=Hr(this,a,t,n,l,u,d,T,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),A=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,w=A;M<w;M+=3){let E=M,L=M+1,y=M+2;s=Hr(this,p,t,n,l,u,d,E,L,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let T=m,A=m+1,M=m+2;s=Hr(this,a,t,n,l,u,d,T,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function pf(i,t,e,n,s,r,a,o){let c;if(t.side===je?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===gi,o),c===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Gr);return l<e.near||l>e.far?null:{distance:l,point:Gr.clone(),object:i}}function Hr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Br),i.getVertexPosition(c,zr),i.getVertexPosition(l,kr);let u=pf(i,t,e,n,Br,zr,kr,bh);if(u){let d=new q;Fn.getBarycoord(bh,Br,zr,kr,d),s&&(u.uv=Fn.getInterpolatedAttribute(s,o,c,l,d,new le)),r&&(u.uv1=Fn.getInterpolatedAttribute(r,o,c,l,d,new le)),a&&(u.normal=Fn.getInterpolatedAttribute(a,o,c,l,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new q,materialIndex:0};Fn.getNormal(Br,zr,kr,h.normal),u.face=h,u.barycoord=d}return u}var ga=class extends Ve{constructor(t=null,e=1,n=1,s,r,a,o,c,l=ke,u=ke,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=new Li,mf=new le(.5,.5),Wr=new q,Qs=class{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],T=r[12],A=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-a,f-u,p-g,w-T).normalize(),s[1].setComponents(l+a,f+u,p+g,w+T).normalize(),s[2].setComponents(l+o,f+d,p+x,w+A).normalize(),s[3].setComponents(l-o,f-d,p-x,w-A).normalize(),n)s[4].setComponents(c,h,m,M).normalize(),s[5].setComponents(l-c,f-h,p-m,w-M).normalize();else if(s[4].setComponents(l-c,f-h,p-m,w-M).normalize(),e===Sn)s[5].setComponents(l+c,f+h,p+m,w+M).normalize();else if(e===Hs)s[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);let e=mf.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ms=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_a=new q,xa=new q,wh=new Te,zs=new js,Xr=new Li,vl=new q,Eh=new q,ya=class extends en{constructor(t=new Ke,e=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_a.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_a.distanceTo(xa);t.setAttribute("lineDistance",new Je(n,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;wh.copy(s).invert(),zs.copy(t.ray).applyMatrix4(wh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=u.getX(x),T=u.getX(x+1),A=qr(this,t,zs,c,p,T,x);A&&e.push(A)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=qr(this,t,zs,c,x,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=qr(this,t,zs,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=qr(this,t,zs,c,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(_a.fromBufferAttribute(o,s),xa.fromBufferAttribute(o,r),e.distanceSqToSegment(_a,xa,vl,Eh)>n)return;vl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(vl);if(!(l<t.near||l>t.far))return{distance:l,point:Eh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Th=new q,Ah=new q,tr=class extends ya{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Th.fromBufferAttribute(e,s),Ah.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Th.distanceTo(Ah);t.setAttribute("lineDistance",new Je(n,1))}else Zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var er=class extends Ve{constructor(t=[],e=_i,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vn=class extends Ve{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var di=class extends Ve{constructor(t,e,n=Tn,s,r,a,o=ke,c=ke,l,u=Bn,d=1){if(u!==Bn&&u!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},va=class extends di{constructor(t,e=Tn,n=_i,s,r,a=ke,o=ke,c,l=Bn){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},nr=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ln=class i extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(d,2));function g(x,m,p,T,A,M,w,E,L,y,C){let D=M/L,G=w/y,N=M/2,O=w/2,I=E/2,U=L+1,J=y+1,H=0,rt=0,K=new q;for(let j=0;j<J;j++){let at=j*G-O;for(let pt=0;pt<U;pt++){let ht=pt*D-N;K[x]=ht*T,K[m]=at*A,K[p]=I,l.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=E>0?1:-1,u.push(K.x,K.y,K.z),d.push(pt/L),d.push(1-j/y),H+=1}}for(let j=0;j<y;j++)for(let at=0;at<L;at++){let pt=h+at+U*j,ht=h+at+U*(j+1),vt=h+(at+1)+U*(j+1),dt=h+(at+1)+U*j;c.push(pt,ht,dt),c.push(ht,vt,dt),rt+=6}o.addGroup(f,rt,C),f+=rt,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Yr=new q,$r=new q,Ml=new q,Zr=new Fn,ir=class extends Ke{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ta*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:m,c:p}=Zr;if(x.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Zr.getNormal(Ml),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){let A=(T+1)%3,M=d[T],w=d[A],E=Zr[u[T]],L=Zr[u[A]],y=`${M}_${w}`,C=`${w}_${M}`;C in h&&h[C]?(Ml.dot(h[C].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(L.x,L.y,L.z)),h[C]=null):y in h||(h[y]={index0:l[T],index1:l[A],normal:Ml.clone()})}}for(let g in h)if(h[g]){let{index0:x,index1:m}=h[g];Yr.fromBufferAttribute(o,x),$r.fromBufferAttribute(o,m),f.push(Yr.x,Yr.y,Yr.z),f.push($r.x,$r.y,$r.z)}this.setAttribute("position",new Je(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var sr=class i extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=t/o,h=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let T=p*h-a;for(let A=0;A<l;A++){let M=A*d-r;g.push(M,-T,0),x.push(0,0,1),m.push(A/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){let A=T+l*p,M=T+l*(p+1),w=T+1+l*(p+1),E=T+1+l*p;f.push(A,M,E),f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function Fi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ch(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ch(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=Fi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ch(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var _u={clone:Fi,merge:qe},_f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ma=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Sa=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ba=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function os(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Sl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var fi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wa=class extends fi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case El:r=t,o=2*e-n;break;case Tl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case El:a=t,c=2*n-e;break;case Tl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,T=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,A=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+T*a[l+w]+A*a[c+w]+M*a[d+w];return r}},Ea=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}},Ta=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Aa=class extends fi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}let h=o*2,f=t-1;for(let g=0;g!==o;++g){let x=a[l+g],m=a[c+g],p=f*h+g*2,T=d[p],A=d[p+1],M=t*h+g*2,w=u[M],E=u[M+1],L=vf(n,e,T,w,s);r[g]=xu(L,x,A,E,m)}return r}};function xu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function yf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function vf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=xu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=yf(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=os(e,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:os(t.times,Array),values:os(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Sl(t.settings)&&(n.settings={inTangents:os(t.settings.inTangents,Array),outTangents:os(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Aa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ks:e=this.InterpolantFactoryMethodDiscrete;break;case ha:e=this.InterpolantFactoryMethodLinear;break;case jr:e=this.InterpolantFactoryMethodSmooth;break;case bl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return jr;case this.InterpolantFactoryMethodBezier:return bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Sl(this.settings)&&(Rh(this.settings.inTangents,t),Rh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){jt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){jt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Zd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){jt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[h+g]||x!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Sl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=ha;var pi=class extends cn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=ks;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};Ca.prototype.ValueTypeName="color";var Ra=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};Ra.prototype.ValueTypeName="number";var Ia=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)kn.slerpFlat(r,0,a,l-o,a,l,c);return r}},rr=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}};rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends cn{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=ks;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};Pa.prototype.ValueTypeName="vector";var La=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yu=new La,Da=class{constructor(t){this.manager=t!==void 0?t:yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Da.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=new q,Kr=new kn,Nn=new q,ar=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jr,Kr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Kr,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Jr,Kr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Kr,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new q,Ih=new le,Ph=new le,We=class extends ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Ih,Ph),e.subVectors(Ph,Ih)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ta*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var or=class extends ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ls=-90,cs=1,Na=class extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(ls,cs,t,e);s.layers=this.layers,this.add(s);let r=new We(ls,cs,t,e);r.layers=this.layers,this.add(r);let a=new We(ls,cs,t,e);a.layers=this.layers,this.add(a);let o=new We(ls,cs,t,e);o.layers=this.layers,this.add(o);let c=new We(ls,cs,t,e);c.layers=this.layers,this.add(c);let l=new We(ls,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ua=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ec="\\[\\]\\.:\\/",Mf=new RegExp("["+ec+"]","g"),nc="[^"+ec+"]",Sf="[^"+ec.replace("\\.","")+"]",bf=/((?:WC+[\/:])*)/.source.replace("WC",nc),wf=/(WCOD+)?/.source.replace("WCOD",Sf),Ef=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nc),Tf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nc),Af=new RegExp("^"+bf+wf+Ef+Tf+"$"),Cf=["material","materials","bones","map"],Al=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mf,"")}static parseTrackName(t){let e=Af.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Al;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ex=new Float32Array(1);var lc=class lc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};lc.prototype.isMatrix2=!0;var Cl=lc;function ic(i,t,e,n){let s=Rf(n);switch(e){case $l:return i*t;case Jl:return i*t/s.components*s.byteLength;case Ha:return i*t/s.components*s.byteLength;case vi:return i*t*2/s.components*s.byteLength;case Wa:return i*t*2/s.components*s.byteLength;case Zl:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case Xa:return i*t*4/s.components*s.byteLength;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:case Za:return Math.max(i,16)*Math.max(t,8)/4;case qa:case $a:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case Ka:case Qa:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:case mr:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _o:case xo:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case gr:case So:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rf(i){switch(i){case hn:case Wl:return{byteLength:1,components:1};case xs:case Xl:case Cn:return{byteLength:2,components:1};case Va:case Ga:return{byteLength:2,components:4};case Tn:case ka:case An:return{byteLength:4,components:1};case ql:case Yl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pf(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Df=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,np=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ip=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Np=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Am=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Km=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:Lf,alphahash_pars_fragment:Df,alphamap_fragment:Nf,alphamap_pars_fragment:Uf,alphatest_fragment:Ff,alphatest_pars_fragment:Of,aomap_fragment:Bf,aomap_pars_fragment:zf,batching_pars_vertex:kf,batching_vertex:Vf,begin_vertex:Gf,beginnormal_vertex:Hf,bsdfs:Wf,iridescence_fragment:Xf,bumpmap_pars_fragment:qf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:Jf,color_fragment:Kf,color_pars_fragment:jf,color_pars_vertex:Qf,color_vertex:tp,common:ep,cube_uv_reflection_fragment:np,defaultnormal_vertex:ip,displacementmap_pars_vertex:sp,displacementmap_vertex:rp,emissivemap_fragment:ap,emissivemap_pars_fragment:op,colorspace_fragment:lp,colorspace_pars_fragment:cp,envmap_fragment:hp,envmap_common_pars_fragment:up,envmap_pars_fragment:dp,envmap_pars_vertex:fp,envmap_physical_pars_fragment:wp,envmap_vertex:pp,fog_vertex:mp,fog_pars_vertex:gp,fog_fragment:_p,fog_pars_fragment:xp,gradientmap_pars_fragment:yp,lightmap_pars_fragment:vp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:Sp,lights_pars_begin:bp,lights_toon_fragment:Ep,lights_toon_pars_fragment:Tp,lights_phong_fragment:Ap,lights_phong_pars_fragment:Cp,lights_physical_fragment:Rp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Pp,lights_fragment_maps:Lp,lights_fragment_end:Dp,lightprobes_pars_fragment:Np,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:Bp,map_fragment:zp,map_pars_fragment:kp,map_particle_fragment:Vp,map_particle_pars_fragment:Gp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:Xp,morphcolor_vertex:qp,morphnormal_vertex:Yp,morphtarget_pars_vertex:$p,morphtarget_vertex:Zp,normal_fragment_begin:Jp,normal_fragment_maps:Kp,normal_pars_fragment:jp,normal_pars_vertex:Qp,normal_vertex:tm,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:am,packing:om,premultiplied_alpha_fragment:lm,project_vertex:cm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:dm,roughnessmap_pars_fragment:fm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:_m,skinbase_vertex:xm,skinning_pars_vertex:ym,skinning_vertex:vm,skinnormal_vertex:Mm,specularmap_fragment:Sm,specularmap_pars_fragment:bm,tonemapping_fragment:wm,tonemapping_pars_fragment:Em,transmission_fragment:Tm,transmission_pars_fragment:Am,uv_pars_fragment:Cm,uv_pars_vertex:Rm,uv_vertex:Im,worldpos_vertex:Pm,background_vert:Lm,background_frag:Dm,backgroundCube_vert:Nm,backgroundCube_frag:Um,cube_vert:Fm,cube_frag:Om,depth_vert:Bm,depth_frag:zm,distance_vert:km,distance_frag:Vm,equirect_vert:Gm,equirect_frag:Hm,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:qm,meshbasic_frag:Ym,meshlambert_vert:$m,meshlambert_frag:Zm,meshmatcap_vert:Jm,meshmatcap_frag:Km,meshnormal_vert:jm,meshnormal_frag:Qm,meshphong_vert:tg,meshphong_frag:eg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:sg,meshtoon_frag:rg,points_vert:ag,points_frag:og,shadow_vert:lg,shadow_frag:cg,sprite_vert:hg,sprite_frag:ug},It={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Wn={basic:{uniforms:qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:qe([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:qe([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new se(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:qe([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:qe([It.points,It.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:qe([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:qe([It.common,It.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:qe([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:qe([It.sprite,It.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:qe([It.common,It.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:qe([It.lights,It.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Wn.physical={uniforms:qe([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Eo={r:0,b:0,g:0},dg=new Te,Gu=new ee;Gu.set(-1,0,0,0,1,0,0,0,1);function fg(i,t,e,n,s,r){let a=new se(0),o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){let M=T.backgroundBlurriness>0;A=t.get(A,M)}return A}function g(T){let A=!1,M=f(T);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(T,A){let M=f(A);M&&(M.isCubeTexture||M.mapping===cr)?(l===void 0&&(l=new Pe(new ln(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Fi(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gu),l.material.toneMapped=ce.getTransfer(M.colorSpace)!==_e,(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Pe(new sr(2,2),new Xe({name:"BackgroundMaterial",uniforms:Fi(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ce.getTransfer(M.colorSpace)!==_e,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,A){T.getRGB(Eo,tc(i)),e.buffers.color.setClear(Eo.r,Eo.g,Eo.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,A=1){a.set(T),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:g,addToRenderList:x,dispose:p}}function pg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(G,N,O,I,U){let J=!1,H=d(G,I,O,N);r!==H&&(r=H,l(r.object)),J=f(G,I,O,U),J&&g(G,I,O,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(G,N,O,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(G){return i.bindVertexArray(G)}function u(G){return i.deleteVertexArray(G)}function d(G,N,O,I){let U=I.wireframe===!0,J=n[N.id];J===void 0&&(J={},n[N.id]=J);let H=G.isInstancedMesh===!0?G.id:0,rt=J[H];rt===void 0&&(rt={},J[H]=rt);let K=rt[O.id];K===void 0&&(K={},rt[O.id]=K);let j=K[U];return j===void 0&&(j=h(c()),K[U]=j),j}function h(G){let N=[],O=[],I=[];for(let U=0;U<e;U++)N[U]=0,O[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:I,object:G,attributes:{},index:null}}function f(G,N,O,I){let U=r.attributes,J=N.attributes,H=0,rt=O.getAttributes();for(let K in rt)if(rt[K].location>=0){let at=U[K],pt=J[K];if(pt===void 0&&(K==="instanceMatrix"&&G.instanceMatrix&&(pt=G.instanceMatrix),K==="instanceColor"&&G.instanceColor&&(pt=G.instanceColor)),at===void 0||at.attribute!==pt||pt&&at.data!==pt.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function g(G,N,O,I){let U={},J=N.attributes,H=0,rt=O.getAttributes();for(let K in rt)if(rt[K].location>=0){let at=J[K];at===void 0&&(K==="instanceMatrix"&&G.instanceMatrix&&(at=G.instanceMatrix),K==="instanceColor"&&G.instanceColor&&(at=G.instanceColor));let pt={};pt.attribute=at,at&&at.data&&(pt.data=at.data),U[K]=pt,H++}r.attributes=U,r.attributesNum=H,r.index=I}function x(){let G=r.newAttributes;for(let N=0,O=G.length;N<O;N++)G[N]=0}function m(G){p(G,0)}function p(G,N){let O=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;O[G]=1,I[G]===0&&(i.enableVertexAttribArray(G),I[G]=1),U[G]!==N&&(i.vertexAttribDivisor(G,N),U[G]=N)}function T(){let G=r.newAttributes,N=r.enabledAttributes;for(let O=0,I=N.length;O<I;O++)N[O]!==G[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function A(G,N,O,I,U,J,H){H===!0?i.vertexAttribIPointer(G,N,O,U,J):i.vertexAttribPointer(G,N,O,I,U,J)}function M(G,N,O,I){x();let U=I.attributes,J=O.getAttributes(),H=N.defaultAttributeValues;for(let rt in J){let K=J[rt];if(K.location>=0){let j=U[rt];if(j===void 0&&(rt==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),rt==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),j!==void 0){let at=j.normalized,pt=j.itemSize,ht=t.get(j);if(ht===void 0)continue;let vt=ht.buffer,dt=ht.type,Pt=ht.bytesPerElement,Z=dt===i.INT||dt===i.UNSIGNED_INT||j.gpuType===ka;if(j.isInterleavedBufferAttribute){let it=j.data,xt=it.stride,Mt=j.offset;if(it.isInstancedInterleavedBuffer){for(let mt=0;mt<K.locationSize;mt++)p(K.location+mt,it.meshPerAttribute);G.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let mt=0;mt<K.locationSize;mt++)m(K.location+mt);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let mt=0;mt<K.locationSize;mt++)A(K.location+mt,pt/K.locationSize,dt,at,xt*Pt,(Mt+pt/K.locationSize*mt)*Pt,Z)}else{if(j.isInstancedBufferAttribute){for(let it=0;it<K.locationSize;it++)p(K.location+it,j.meshPerAttribute);G.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let it=0;it<K.locationSize;it++)m(K.location+it);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let it=0;it<K.locationSize;it++)A(K.location+it,pt/K.locationSize,dt,at,pt*Pt,pt/K.locationSize*it*Pt,Z)}}else if(H!==void 0){let at=H[rt];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(K.location,at);break;case 3:i.vertexAttrib3fv(K.location,at);break;case 4:i.vertexAttrib4fv(K.location,at);break;default:i.vertexAttrib1fv(K.location,at)}}}}T()}function w(){C();for(let G in n){let N=n[G];for(let O in N){let I=N[O];for(let U in I){let J=I[U];for(let H in J)u(J[H].object),delete J[H];delete I[U]}}delete n[G]}}function E(G){if(n[G.id]===void 0)return;let N=n[G.id];for(let O in N){let I=N[O];for(let U in I){let J=I[U];for(let H in J)u(J[H].object),delete J[H];delete I[U]}}delete n[G.id]}function L(G){for(let N in n){let O=n[N];for(let I in O){let U=O[I];if(U[G.id]===void 0)continue;let J=U[G.id];for(let H in J)u(J[H].object),delete J[H];delete U[G.id]}}}function y(G){for(let N in n){let O=n[N],I=G.isInstancedMesh===!0?G.id:0,U=O[I];if(U!==void 0){for(let J in U){let H=U[J];for(let rt in H)u(H[rt].object),delete H[rt];delete U[J]}delete O[I],Object.keys(O).length===0&&delete n[N]}}}function C(){D(),a=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function mg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function gg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==mn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let y=L===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==hn&&L!==An&&!y&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Zt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:M,maxSamples:w,samples:E}}function _g(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Mn,o=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let T=r?0:n,A=T*4,M=p.clippingState||null;c.value=M,M=u(g,h,A,f);for(let w=0;w!==A;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=f;A!==x;++A,M+=4)a.copy(d[A]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Ms=4,xg=6,yg=20,vg=256,_r=new or,vu=new se,cc=null,hc=0,uc=0,dc=!1,Mg=new q,Oi=new q,Ao=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Mg}=r;cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cc,hc,uc),this._renderer.xr.enabled=dc,t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:Cn,format:mn,colorSpace:Vs,depthBuffer:!1},s=Mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Sg(r)),this._blurMaterial=wg(r,t,e),this._ggxMaterial=bg(r,t,e)}return s}_compileMaterial(t){let e=new Pe(new Ke,t);this._renderer.compile(e,_r)}_sceneToCubeUV(t,e,n,s,r){let c=new We(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(vu),d.toneMapping=En,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new ln,new wn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,p=!0):(m.color.copy(vu),p=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[A],r.y,r.z)):M===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[A]));let w=this._cubeSize;vs(s,M*w,A>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(x,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_i||t.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;vs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,_r)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Ms?n-g+Ms:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,vs(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,_r),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,vs(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(o,_r)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Ms?s-this._lodMax+Ms:0),h=4*(this._cubeSize-u);vs(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(c,_r)}};function Sg(i){let t=[],e=[],n=i,s=i-Ms+1+xg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),x=new Float32Array(f*h*d);for(let p=0;p<d;p++){let T=p%3*2/3-1,A=p>2?0:-1,M=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];g.set(M,f*h*p);for(let w=0;w<h;w++){let E=u[w*2]*2-1,L=u[w*2+1]*2-1;p===0?Oi.set(1,L,E):p===1?Oi.set(-E,1,-L):p===2?Oi.set(-E,L,1):p===3?Oi.set(-1,L,-E):p===4?Oi.set(-E,-1,L):Oi.set(E,L,-1),Oi.toArray(x,(p*h+w)*f)}}let m=new Ke;m.setAttribute("position",new Ne(g,f)),m.setAttribute("outputDirection",new Ne(x,f)),e.push(new Pe(m,null)),n>Ms&&n--}return{lodMeshes:e,sizeLods:t}}function Mu(i,t,e){let n=new tn(i,t,e);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bg(i,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function wg(i,t,e){return new Xe({name:"SphericalGaussianBlur",defines:{SAMPLES:yg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Su(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function bu(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Io(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Co=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ln(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Gn});r.uniforms.tEquirect.value=e;let a=new Pe(s,r),o=e.minFilter;return e.minFilter===xi&&(e.minFilter=De),new Na(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Eg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Oa||f===Ba)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new Co(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",l),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Oa||f===Ba,x=f===_i||f===Ui;if(g||x){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Ao(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let T=h.image;return g&&T&&T.height>0||x&&T&&c(T)?(n===null&&(n=new Ao(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Oa?h.mapping=_i:f===Ba&&(h.mapping=Ui),h}function c(h){let f=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Tg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Pi("WebGLRenderer: "+n+" extension not supported."),s}}}function Ag(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let T=f.array;x=f.version;for(let A=0,M=T.length;A<M;A+=3){let w=T[A+0],E=T[A+1],L=T[A+2];h.push(w,E,E,L,L,w)}}else{let T=g.array;x=g.version;for(let A=0,M=T.length/3-1;A<M;A+=3){let w=A+0,E=A+1,L=A+2;h.push(w,E,E,L,L,w)}}let m=new(g.count>=65535?Js:Zs)(h,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Cg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function l(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=h[m];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Rg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ig(i,t,e){let n=new WeakMap,s=new Ae;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let C=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let M=o.attributes.position.count*A,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*w*4*d),L=new qs(E,M,w,d);L.type=An,L.needsUpdate=!0;let y=A*4;for(let D=0;D<d;D++){let G=m[D],N=p[D],O=T[D],I=M*w*4*D;for(let U=0;U<G.count;U++){let J=U*y;f===!0&&(s.fromBufferAttribute(G,U),E[I+J+0]=s.x,E[I+J+1]=s.y,E[I+J+2]=s.z,E[I+J+3]=0),g===!0&&(s.fromBufferAttribute(N,U),E[I+J+4]=s.x,E[I+J+5]=s.y,E[I+J+6]=s.z,E[I+J+7]=0),x===!0&&(s.fromBufferAttribute(O,U),E[I+J+8]=s.x,E[I+J+9]=s.y,E[I+J+10]=s.z,E[I+J+11]=O.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new le(M,w)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Pg(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Lg={[Fl]:"LINEAR_TONE_MAPPING",[Ol]:"REINHARD_TONE_MAPPING",[Bl]:"CINEON_TONE_MAPPING",[zl]:"ACES_FILMIC_TONE_MAPPING",[Vl]:"AGX_TONE_MAPPING",[Gl]:"NEUTRAL_TONE_MAPPING",[kl]:"CUSTOM_TONE_MAPPING"};function Dg(i,t,e,n,s,r){let a=new tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ke;l.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Je([0,2,0,0,2,0],2));let u=new Ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Pe(l,u),h=new or(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,T=[],A=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),c!==null&&c.setSize(M,w);for(let E=0;E<T.length;E++){let L=T[E];L.setSize&&L.setSize(M,w)}},this.setEffects=function(M){T=M,A=T.length>0&&T[0].isRenderPass===!0;let w=a.width,E=a.height;T.length>0&&o===null&&(o=new tn(w,E,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),c=new tn(w,E,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<T.length;L++){let y=T[L];y.setSize&&y.setSize(w,E)}},this.begin=function(M,w){if(x||M.toneMapping===En&&T.length===0)return!1;if(p=w,w!==null){let E=w.width,L=w.height;(a.width!==E||a.height!==L)&&this.setSize(E,L)}return A===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=En,!0},this.hasRenderPass=function(){return A},this.end=function(M,w){M.toneMapping=m,x=!0;let E=a,L=o;for(let y=0;y<T.length;y++){let C=T[y];C.enabled!==!1&&(C.render(M,L,E,w),C.needsSwap!==!1&&(E=L,L=L===o?c:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,u.defines={},ce.getTransfer(f)===_e&&(u.defines.SRGB_TRANSFER="");let y=Lg[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(p),M.render(d,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Hu=new Ve,mc=new di(1,1),Wu=new qs,Xu=new pa,qu=new er,wu=[],Eu=[],Tu=new Float32Array(16),Au=new Float32Array(9),Cu=new Float32Array(4);function bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=wu[s];if(r===void 0&&(r=new Float32Array(s),wu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Po(i,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Cu.set(n),i.uniformMatrix2fv(this.addr,!1,Cu),Fe(e,n)}}function zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Au.set(n),i.uniformMatrix3fv(this.addr,!1,Au),Fe(e,n)}}function kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Tu.set(n),i.uniformMatrix4fv(this.addr,!1,Tu),Fe(e,n)}}function Vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mc.compareFunction=e.isReversedDepthBuffer()?wo:bo,r=mc):r=Hu,e.setTexture2D(t||r,s)}function Jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xu,s)}function Kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qu,s)}function jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wu,s)}function Qg(i){switch(i){case 5126:return Ng;case 35664:return Ug;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return zg;case 35676:return kg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return jg}}function t0(i,t){i.uniform1fv(this.addr,t)}function e0(i,t){let e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function n0(i,t){let e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function i0(i,t){let e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function s0(i,t){let e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function r0(i,t){let e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function a0(i,t){let e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function o0(i,t){i.uniform1iv(this.addr,t)}function l0(i,t){i.uniform2iv(this.addr,t)}function c0(i,t){i.uniform3iv(this.addr,t)}function h0(i,t){i.uniform4iv(this.addr,t)}function u0(i,t){i.uniform1uiv(this.addr,t)}function d0(i,t){i.uniform2uiv(this.addr,t)}function f0(i,t){i.uniform3uiv(this.addr,t)}function p0(i,t){i.uniform4uiv(this.addr,t)}function m0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=mc:a=Hu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function g0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xu,r[a])}function _0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||qu,r[a])}function x0(i,t,e){let n=this.cache,s=t.length,r=Po(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wu,r[a])}function y0(i){switch(i){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}var gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}},_c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=y0(e.type)}},xc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function Ru(i,t){i.seq.push(t),i.map[t.id]=t}function v0(i,t,e){let n=i.name,s=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),a=fc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ru(e,l===void 0?new gc(o,i,t):new _c(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new xc(o),Ru(e,d)),e=d}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);v0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Iu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var M0=37297,S0=0;function b0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Pu=new ee;function w0(i){ce._getMatrix(Pu,ce.workingColorSpace,i);let t=`mat3( ${Pu.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Gs:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+b0(i.getShaderSource(t),o)}else return r}function E0(i,t){let e=w0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var T0={[Fl]:"Linear",[Ol]:"Reinhard",[Bl]:"Cineon",[zl]:"ACESFilmic",[Vl]:"AgX",[Gl]:"Neutral",[kl]:"Custom"};function A0(i,t){let e=T0[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var To=new q;function C0(){ce.getLuminanceCoefficients(To);let i=To.x.toFixed(4),t=To.y.toFixed(4),e=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function I0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function yr(i){return i!==""}function Du(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var L0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(L0,N0)}var D0=new Map;function N0(i,t){let e=ae[t];if(e===void 0){let n=D0.get(t);if(n!==void 0)e=ae[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yc(e)}var U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(i){return i.replace(U0,F0)}function F0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var O0={[lr]:"SHADOWMAP_TYPE_PCF",[gs]:"SHADOWMAP_TYPE_VSM"};function B0(i){return O0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var z0={[_i]:"ENVMAP_TYPE_CUBE",[Ui]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE_UV"};function k0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":z0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var V0={[Ui]:"ENVMAP_MODE_REFRACTION"};function G0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":V0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var H0={[Ul]:"ENVMAP_BLENDING_MULTIPLY",[Qh]:"ENVMAP_BLENDING_MIX",[tu]:"ENVMAP_BLENDING_ADD"};function W0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":H0[i.combine]||"ENVMAP_BLENDING_NONE"}function X0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function q0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=B0(e),l=k0(e),u=G0(e),d=W0(e),h=X0(e),f=R0(e),g=I0(r),x=s.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?ae.tonemapping_pars_fragment:"",e.toneMapping!==En?A0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,E0("linearToOutputTexel",e.outputColorSpace),C0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),a=yc(a),a=Du(a,e),a=Nu(a,e),o=yc(o),o=Du(o,e),o=Nu(o,e),a=Uu(a),o=Uu(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=T+m+a,M=T+p+o,w=Iu(s,s.VERTEX_SHADER,A),E=Iu(s,s.FRAGMENT_SHADER,M);s.attachShader(x,w),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(G){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(E)||"",U=N.trim(),J=O.trim(),H=I.trim(),rt=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,E);else{let j=Lu(s,w,"vertex"),at=Lu(s,E,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+U+`
`+j+`
`+at)}else U!==""?Zt("WebGLProgram: Program Info Log:",U):(J===""||H==="")&&(K=!1);K&&(G.diagnostics={runnable:rt,programLog:U,vertexShader:{log:J,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(w),s.deleteShader(E),y=new Ss(s,x),C=P0(s,x)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,M0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}var Y0=0,vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mc(t),e.set(t,n)),n}},Mc=class{constructor(t){this.id=Y0++,this.code=t,this.usedTimes=0}};function $0(i){return i===vi||i===mr||i===gr}function Z0(i,t,e,n,s,r){let a=new Ys,o=new vc,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,C,D,G,N,O){let I=G.fog,U=N.geometry,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?G.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,rt=t.get(y.envMap||J,H),K=rt&&rt.mapping===cr?rt.image.height:null,j=f[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Zt("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let at=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,pt=at!==void 0?at.length:0,ht=0;U.morphAttributes.position!==void 0&&(ht=1),U.morphAttributes.normal!==void 0&&(ht=2),U.morphAttributes.color!==void 0&&(ht=3);let vt,dt,Pt,Z;if(j){let ye=Wn[j];vt=ye.vertexShader,dt=ye.fragmentShader}else{vt=y.vertexShader,dt=y.fragmentShader;let ye=o.getVertexShaderStage(y),me=o.getFragmentShaderStage(y);o.update(y,ye,me),Pt=ye.id,Z=me.id}let it=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Mt=N.isInstancedMesh===!0,mt=N.isBatchedMesh===!0,Lt=!!y.map,ne=!!y.matcap,Ot=!!rt,qt=!!y.aoMap,$t=!!y.lightMap,Xt=!!y.bumpMap&&y.wireframe===!1,ue=!!y.normalMap,be=!!y.displacementMap,Ee=!!y.emissiveMap,pe=!!y.metalnessMap,xe=!!y.roughnessMap,V=y.anisotropy>0,Ce=y.clearcoat>0,de=y.dispersion>0,R=y.retroreflectivity>0,_=y.iridescence>0,X=y.sheen>0,B=y.transmission>0,Q=V&&!!y.anisotropyMap,gt=Ce&&!!y.clearcoatMap,St=Ce&&!!y.clearcoatNormalMap,ot=Ce&&!!y.clearcoatRoughnessMap,ct=_&&!!y.iridescenceMap,wt=_&&!!y.iridescenceThicknessMap,Vt=X&&!!y.sheenColorMap,_t=X&&!!y.sheenRoughnessMap,bt=!!y.specularMap,Gt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,Kt=B&&!!y.transmissionMap,k=B&&!!y.thicknessMap,Et=!!y.gradientMap,lt=!!y.alphaMap,Tt=y.alphaTest>0,Ct=!!y.alphaHash,ut=!!y.extensions,Ht=En;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let Ft={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:vt,fragmentShader:dt,defines:y.defines,customVertexShaderID:Pt,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:mt,batchingColor:mt&&N._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&N.instanceColor!==null,instancingMorph:Mt&&N.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Lt,matcap:ne,envMap:Ot,envMapMode:Ot&&rt.mapping,envMapCubeUVHeight:K,aoMap:qt,lightMap:$t,bumpMap:Xt,normalMap:ue,displacementMap:be,emissiveMap:Ee,normalMapObjectSpace:ue&&y.normalMapType===iu,normalMapTangentSpace:ue&&y.normalMapType===Kl,packedNormalMap:ue&&y.normalMapType===Kl&&$0(y.normalMap.format),metalnessMap:pe,roughnessMap:xe,anisotropy:V,anisotropyMap:Q,clearcoat:Ce,clearcoatMap:gt,clearcoatNormalMap:St,clearcoatRoughnessMap:ot,dispersion:de,retroreflection:R,iridescence:_,iridescenceMap:ct,iridescenceThicknessMap:wt,sheen:X,sheenColorMap:Vt,sheenRoughnessMap:_t,specularMap:bt,specularColorMap:Gt,specularIntensityMap:Yt,transmission:B,transmissionMap:Kt,thicknessMap:k,gradientMap:Et,opaque:y.transparent===!1&&y.blending===_s&&y.alphaToCoverage===!1,alphaMap:lt,alphaTest:Tt,alphaHash:Ct,combine:y.combine,mapUv:Lt&&g(y.map.channel),aoMapUv:qt&&g(y.aoMap.channel),lightMapUv:$t&&g(y.lightMap.channel),bumpMapUv:Xt&&g(y.bumpMap.channel),normalMapUv:ue&&g(y.normalMap.channel),displacementMapUv:be&&g(y.displacementMap.channel),emissiveMapUv:Ee&&g(y.emissiveMap.channel),metalnessMapUv:pe&&g(y.metalnessMap.channel),roughnessMapUv:xe&&g(y.roughnessMap.channel),anisotropyMapUv:Q&&g(y.anisotropyMap.channel),clearcoatMapUv:gt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:St&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(y.sheenRoughnessMap.channel),specularMapUv:bt&&g(y.specularMap.channel),specularColorMapUv:Gt&&g(y.specularColorMap.channel),specularIntensityMapUv:Yt&&g(y.specularIntensityMap.channel),transmissionMapUv:Kt&&g(y.transmissionMap.channel),thicknessMapUv:k&&g(y.thicknessMap.channel),alphaMapUv:lt&&g(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ue||V),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Lt||lt),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&ue===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:ht,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Lt&&y.map.isVideoTexture===!0&&ce.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:Ee&&y.emissiveMap.isVideoTexture===!0&&ce.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pn,flipSided:y.side===je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ut&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&y.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function m(y){let C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)C.push(D),C.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(p(C,y),T(C,y),C.push(i.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function p(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numSunLights),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numSunLightShadows),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function T(y,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){let C=f[y.type],D;if(C){let G=Wn[C];D=_u.clone(G.uniforms)}else D=y.uniforms;return D}function M(y,C){let D=u.get(C);return D!==void 0?++D.usedTimes:(D=new q0(i,C,y,s),l.push(D),u.set(C,D)),D}function w(y){if(--y.usedTimes===0){let C=l.indexOf(y);l[C]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function L(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:L}}function J0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function K0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,x,m,p){let T=i[t];return T===void 0?(T={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[t]=T):(T.id=h.id,T.object=h,T.geometry=f,T.material=g,T.materialVariant=a(h),T.groupOrder=x,T.renderOrder=h.renderOrder,T.z=m,T.group=p),t++,T}function c(h,f,g,x,m,p,T){T.reversedDepth===!0&&(m=-m);let A=o(h,f,g,x,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function l(h,f,g,x,m,p){let T=o(h,f,g,x,m,p);g.transmission>0?n.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function u(h,f){e.length>1&&e.sort(h||K0),n.length>1&&n.sort(f||Ou),s.length>1&&s.sort(f||Ou)}function d(){for(let h=t,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function j0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Bu,i.set(n,[a])):s>=r.length?(a=new Bu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Q0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new se};break;case"SpotLight":e={position:new q,direction:new q,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function t_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var e_=0;function n_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function i_(i){let t=new Q0,e=t_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);let s=new q,r=new Te,a=new Te;function o(l){let u=0,d=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,T=0,A=0,M=0,w=0,E=0,L=0,y=0,C=0,D=0;l.sort(n_);for(let N=0,O=l.length;N<O;N++){let I=l[N],U=I.color,J=I.intensity,H=I.distance,rt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===vi?rt=I.shadow.map.texture:rt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=U.r*J,d+=U.g*J,h+=U.b*J;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],J);D++}else if(I.isSunLight){let K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,at=e.get(I);at.shadowIntensity=j.intensity,at.shadowBias=j.bias,at.shadowNormalBias=j.normalBias,at.shadowRadius=j.radius,at.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=at,n.sunShadowMap[g]=rt;let pt=j.getViewportCount();for(let ht=0;ht<pt;ht++)n.sunShadowMatrix[x+ht]=j.getMatrix(ht),n.sunShadowCascade[x+ht]=j._cascadeData[ht];x+=pt,g++}n.sun[f]=K,f++}else if(I.isDirectionalLight){let K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,at=e.get(I);at.shadowIntensity=j.intensity,at.shadowBias=j.bias,at.shadowNormalBias=j.normalBias,at.shadowRadius=j.radius,at.shadowMapSize=j.mapSize,n.directionalShadow[m]=at,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=I.shadow.matrix,w++}n.directional[m]=K,m++}else if(I.isSpotLight){let K=t.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(U).multiplyScalar(J),K.distance=H,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[T]=K;let j=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,j.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[T]=j.matrix,I.castShadow){let at=e.get(I);at.shadowIntensity=j.intensity,at.shadowBias=j.bias,at.shadowNormalBias=j.normalBias,at.shadowRadius=j.radius,at.shadowMapSize=j.mapSize,n.spotShadow[T]=at,n.spotShadowMap[T]=rt,L++}T++}else if(I.isRectAreaLight){let K=t.get(I);K.color.copy(U).multiplyScalar(J),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=K,A++}else if(I.isPointLight){let K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){let j=I.shadow,at=e.get(I);at.shadowIntensity=j.intensity,at.shadowBias=j.bias,at.shadowNormalBias=j.normalBias,at.shadowRadius=j.radius,at.shadowMapSize=j.mapSize,at.shadowCameraNear=j.camera.near,at.shadowCameraFar=j.camera.far,n.pointShadow[p]=at,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=K,p++}else if(I.isHemisphereLight){let K=t.get(I);K.skyColor.copy(I.color).multiplyScalar(J),K.groundColor.copy(I.groundColor).multiplyScalar(J),n.hemi[M]=K,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let G=n.hash;(G.sunLength!==f||G.directionalLength!==m||G.pointLength!==p||G.spotLength!==T||G.rectAreaLength!==A||G.hemiLength!==M||G.numSunShadows!==g||G.numDirectionalShadows!==w||G.numPointShadows!==E||G.numSpotShadows!==L||G.numSpotMaps!==y||G.numLightProbes!==D)&&(n.sun.length=f,n.directional.length=m,n.spot.length=T,n.rectArea.length=A,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+y-C,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,G.sunLength=f,G.directionalLength=m,G.pointLength=p,G.spotLength=T,G.rectAreaLength=A,G.hemiLength=M,G.numSunShadows=g,G.numDirectionalShadows=w,G.numPointShadows=E,G.numSpotShadows=L,G.numSpotMaps=y,G.numLightProbes=D,n.version=e_++)}function c(l,u){let d=0,h=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let T=0,A=l.length;T<A;T++){let M=l[T];if(M.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let w=n.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(M.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function zu(i){let t=new i_(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function s_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new zu(i),t.set(s,[o])):r>=a.length?(o=new zu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o_=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],l_=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],ku=new Te,xr=new q,pc=new q;function c_(i,t,e){let n=new Qs,s=new le,r=new le,a=new Ae,o=new Sa,c=new ba,l={},u=e.maxTextureSize,d={[gi]:je,[je]:gi,[pn]:pn},h=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:r_,fragmentShader:a_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ke;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lr;let p=this.type;this.render=function(E,L,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Nh&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lr);let C=i.getRenderTarget(),D=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Gn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=p!==this.type;O&&L.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=E.length;I<U;I++){let J=E[I],H=J.shadow;if(H===void 0){Zt("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let rt=H.getFrameExtents();s.multiply(rt),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,H.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=K,H.map===null||O===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===gs){if(J.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new tn(s.x,s.y,{format:vi,type:Cn,minFilter:De,magFilter:De,generateMipmaps:!1}),H.map.texture.name=J.name+".shadowMap",H.map.depthTexture=new di(s.x,s.y,An),H.map.depthTexture.name=J.name+".shadowMapDepth",H.map.depthTexture.format=Bn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ke,H.map.depthTexture.magFilter=ke}else J.isPointLight?(H.map=new Co(s.x),H.map.depthTexture=new va(s.x,Tn)):(H.map=new tn(s.x,s.y),H.map.depthTexture=new di(s.x,s.y,Tn)),H.map.depthTexture.name=J.name+".shadowMap",H.map.depthTexture.format=Bn,this.type===lr?(H.map.depthTexture.compareFunction=K?wo:bo,H.map.depthTexture.minFilter=De,H.map.depthTexture.magFilter=De):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ke,H.map.depthTexture.magFilter=ke);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();J.isPointLight!==!0&&H.updateMatrices(J,y);for(let at=0;at<j;at++){let pt=H.getCamera(at);if(J.isPointLight){let ht=H.camera,vt=H.matrix,dt=J.distance||ht.far;dt!==ht.far&&(ht.far=dt,ht.updateProjectionMatrix()),xr.setFromMatrixPosition(J.matrixWorld),ht.position.copy(xr),pc.copy(ht.position),pc.add(o_[at]),ht.up.copy(l_[at]),ht.lookAt(pc),ht.updateMatrixWorld(),vt.makeTranslation(-xr.x,-xr.y,-xr.z),ku.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ku,ht.coordinateSystem,ht.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,at),i.clear();else{at===0&&(i.setRenderTarget(H.map),i.clear());let ht=H.getViewport(at);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),N.viewport(a)}n=H.getFrustum(at),M(L,y,pt,J,this.type)}H.isPointLightShadow!==!0&&this.type===gs&&T(H,y),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(C,D,G)};function T(E,L){let y=t.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new tn(s.x,s.y,{format:vi,type:Cn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(L,null,y,h,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(L,null,y,f,x,null)}function A(E,L,y,C){let D=null,G=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(G!==void 0)D=G;else if(D=y.isPointLight===!0?c:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let N=D.uuid,O=L.uuid,I=l[N];I===void 0&&(I={},l[N]=I);let U=I[O];U===void 0&&(U=D.clone(),I[O]=U,L.addEventListener("dispose",w)),D=U}if(D.visible=L.visible,D.wireframe=L.wireframe,C===gs?D.side=L.shadowSide!==null?L.shadowSide:L.side:D.side=L.shadowSide!==null?L.shadowSide:d[L.side],D.alphaMap=L.alphaMap,D.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,D.map=L.map,D.clipShadows=L.clipShadows,D.clippingPlanes=L.clippingPlanes,D.clipIntersection=L.clipIntersection,D.displacementMap=L.displacementMap,D.displacementScale=L.displacementScale,D.displacementBias=L.displacementBias,D.wireframeLinewidth=L.wireframeLinewidth,D.linewidth=L.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let N=i.properties.get(D);N.light=y}return D}function M(E,L,y,C,D){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===gs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let O=t.update(E),I=E.material;if(Array.isArray(I)){let U=O.groups;for(let J=0,H=U.length;J<H;J++){let rt=U[J],K=I[rt.materialIndex];if(K&&K.visible){let j=A(E,K,C,D);E.onBeforeShadow(i,E,L,y,O,j,rt),i.renderBufferDirect(y,null,O,j,E,rt),E.onAfterShadow(i,E,L,y,O,j,rt)}}}else if(I.visible){let U=A(E,I,C,D);E.onBeforeShadow(i,E,L,y,O,U,null),i.renderBufferDirect(y,null,O,U,E,null),E.onAfterShadow(i,E,L,y,O,U,null)}}let N=E.children;for(let O=0,I=N.length;O<I;O++)M(N[O],L,y,C,D)}function w(E){E.target.removeEventListener("dispose",w);for(let y in l){let C=l[y],D=E.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}function h_(i,t){function e(){let k=!1,Et=new Ae,lt=null,Tt=new Ae(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!k&&(i.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,ut,Ht,Ft,ye){ye===!0&&(Ct*=Ft,ut*=Ft,Ht*=Ft),Et.set(Ct,ut,Ht,Ft),Tt.equals(Et)===!1&&(i.clearColor(Ct,ut,Ht,Ft),Tt.copy(Et))},reset:function(){k=!1,lt=null,Tt.set(-1,0,0,0)}}}function n(){let k=!1,Et=!1,lt=null,Tt=null,Ct=null;return{setReversed:function(ut){if(Et!==ut){let Ht=t.get("EXT_clip_control");ut?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Et=ut;let Ft=Ct;Ct=null,this.setClear(Ft)}},getReversed:function(){return Et},setTest:function(ut){ut?it(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(ut){lt!==ut&&!k&&(i.depthMask(ut),lt=ut)},setFunc:function(ut){if(Et&&(ut=pu[ut]),Tt!==ut){switch(ut){case ea:i.depthFunc(i.NEVER);break;case na:i.depthFunc(i.ALWAYS);break;case ia:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case sa:i.depthFunc(i.EQUAL);break;case ra:i.depthFunc(i.GEQUAL);break;case aa:i.depthFunc(i.GREATER);break;case oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=ut}},setLocked:function(ut){k=ut},setClear:function(ut){Ct!==ut&&(Ct=ut,Et&&(ut=1-ut),i.clearDepth(ut))},reset:function(){k=!1,lt=null,Tt=null,Ct=null,Et=!1}}}function s(){let k=!1,Et=null,lt=null,Tt=null,Ct=null,ut=null,Ht=null,Ft=null,ye=null;return{setTest:function(me){k||(me?it(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(me){Et!==me&&!k&&(i.stencilMask(me),Et=me)},setFunc:function(me,sn,Qe){(lt!==me||Tt!==sn||Ct!==Qe)&&(i.stencilFunc(me,sn,Qe),lt=me,Tt=sn,Ct=Qe)},setOp:function(me,sn,Qe){(ut!==me||Ht!==sn||Ft!==Qe)&&(i.stencilOp(me,sn,Qe),ut=me,Ht=sn,Ft=Qe)},setLocked:function(me){k=me},setClear:function(me){ye!==me&&(i.clearStencil(me),ye=me)},reset:function(){k=!1,Et=null,lt=null,Tt=null,Ct=null,ut=null,Ht=null,Ft=null,ye=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],x=null,m=!1,p=null,T=null,A=null,M=null,w=null,E=null,L=null,y=new se(0,0,0),C=0,D=!1,G=null,N=null,O=null,I=null,U=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,rt=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=rt>=1):K.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=rt>=2);let j=null,at={},pt=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),vt=new Ae().fromArray(pt),dt=new Ae().fromArray(ht);function Pt(k,Et,lt,Tt){let Ct=new Uint8Array(4),ut=i.createTexture();i.bindTexture(k,ut),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<lt;Ht++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(Et+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return ut}let Z={};Z[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(us),Xt(!1),ue(Rl),it(i.CULL_FACE),qt(Gn);function it(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function xt(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Mt(k,Et){return h[k]!==Et?(i.bindFramebuffer(k,Et),h[k]=Et,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Et),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function mt(k,Et){let lt=g,Tt=!1;if(k){lt=f.get(Et),lt===void 0&&(lt=[],f.set(Et,lt));let Ct=k.textures;if(lt.length!==Ct.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ht=Ct.length;ut<Ht;ut++)lt[ut]=i.COLOR_ATTACHMENT0+ut;lt.length=Ct.length,Tt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(lt)}function Lt(k){return x!==k?(i.useProgram(k),x=k,!0):!1}let ne={[Ni]:i.FUNC_ADD,[Fh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};ne[Bh]=i.MIN,ne[zh]=i.MAX;let Ot={[kh]:i.ZERO,[Vh]:i.ONE,[Gh]:i.SRC_COLOR,[Dl]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[Nl]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Zh]:i.CONSTANT_COLOR,[Jh]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[jh]:i.ONE_MINUS_CONSTANT_ALPHA};function qt(k,Et,lt,Tt,Ct,ut,Ht,Ft,ye,me){if(k===Gn){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(it(i.BLEND),m=!0),k!==Uh){if(k!==p||me!==D){if((T!==Ni||w!==Ni)&&(i.blendEquation(i.FUNC_ADD),T=Ni,w=Ni),me)switch(k){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Il:i.blendFunc(i.ONE,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ll:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",k);break}else switch(k){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Il:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pl:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ll:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",k);break}A=null,M=null,E=null,L=null,y.set(0,0,0),C=0,p=k,D=me}return}Ct=Ct||Et,ut=ut||lt,Ht=Ht||Tt,(Et!==T||Ct!==w)&&(i.blendEquationSeparate(ne[Et],ne[Ct]),T=Et,w=Ct),(lt!==A||Tt!==M||ut!==E||Ht!==L)&&(i.blendFuncSeparate(Ot[lt],Ot[Tt],Ot[ut],Ot[Ht]),A=lt,M=Tt,E=ut,L=Ht),(Ft.equals(y)===!1||ye!==C)&&(i.blendColor(Ft.r,Ft.g,Ft.b,ye),y.copy(Ft),C=ye),p=k,D=!1}function $t(k,Et){k.side===pn?xt(i.CULL_FACE):it(i.CULL_FACE);let lt=k.side===je;Et&&(lt=!lt),Xt(lt),k.blending===_s&&k.transparent===!1?qt(Gn):qt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Tt=k.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ee(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(k){G!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),G=k)}function ue(k){k!==Lh?(it(i.CULL_FACE),k!==N&&(k===Rl?i.cullFace(i.BACK):k===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),N=k}function be(k){k!==O&&(H&&i.lineWidth(k),O=k)}function Ee(k,Et,lt){k?(it(i.POLYGON_OFFSET_FILL),(I!==Et||U!==lt)&&(I=Et,U=lt,a.getReversed()&&(Et=-Et),i.polygonOffset(Et,lt))):xt(i.POLYGON_OFFSET_FILL)}function pe(k){k?it(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function xe(k){k===void 0&&(k=i.TEXTURE0+J-1),j!==k&&(i.activeTexture(k),j=k)}function V(k,Et,lt){lt===void 0&&(j===null?lt=i.TEXTURE0+J-1:lt=j);let Tt=at[lt];Tt===void 0&&(Tt={type:void 0,texture:void 0},at[lt]=Tt),(Tt.type!==k||Tt.texture!==Et)&&(j!==lt&&(i.activeTexture(lt),j=lt),i.bindTexture(k,Et||Z[k]),Tt.type=k,Tt.texture=Et)}function Ce(){let k=at[j];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function de(){try{i.compressedTexImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function _(){try{i.texSubImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function X(){try{i.texSubImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function gt(){try{i.texStorage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function St(){try{i.texStorage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function ot(){try{i.texImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function ct(){try{i.texImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function wt(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function Vt(k,Et){d[k]!==Et&&(i.pixelStorei(k,Et),d[k]=Et)}function _t(k){vt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),vt.copy(k))}function bt(k){dt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),dt.copy(k))}function Gt(k,Et){let lt=l.get(Et);lt===void 0&&(lt=new WeakMap,l.set(Et,lt));let Tt=lt.get(k);Tt===void 0&&(Tt=i.getUniformBlockIndex(Et,k.name),lt.set(k,Tt))}function Yt(k,Et){let Tt=l.get(Et).get(k);c.get(Et)!==Tt&&(i.uniformBlockBinding(Et,Tt,k.__bindingPointIndex),c.set(Et,Tt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,at={},h={},f=new WeakMap,g=[],x=null,m=!1,p=null,T=null,A=null,M=null,w=null,E=null,L=null,y=new se(0,0,0),C=0,D=!1,G=null,N=null,O=null,I=null,U=null,vt.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:xt,bindFramebuffer:Mt,drawBuffers:mt,useProgram:Lt,setBlending:qt,setMaterial:$t,setFlipSided:Xt,setCullFace:ue,setLineWidth:be,setPolygonOffset:Ee,setScissorTest:pe,activeTexture:xe,bindTexture:V,unbindTexture:Ce,compressedTexImage2D:de,compressedTexImage3D:R,texImage2D:ot,texImage3D:ct,pixelStorei:Vt,getParameter:wt,updateUBOMapping:Gt,uniformBlockBinding:Yt,texStorage2D:gt,texStorage3D:St,texSubImage2D:_,texSubImage3D:X,compressedTexSubImage2D:B,compressedTexSubImage3D:Q,scissor:_t,viewport:bt,reset:Kt}}function u_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,_){return g?new OffscreenCanvas(R,_):Ws("canvas")}function m(R,_,X){let B=1,Q=de(R);if((Q.width>X||Q.height>X)&&(B=X/Math.max(Q.width,Q.height)),B<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let gt=Math.floor(B*Q.width),St=Math.floor(B*Q.height);h===void 0&&(h=x(gt,St));let ot=_?x(gt,St):h;return ot.width=gt,ot.height=St,ot.getContext("2d").drawImage(R,0,0,gt,St),Zt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+gt+"x"+St+")."),ot}else return"data"in R&&Zt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps}function T(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,_,X,B,Q,gt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let St;B&&(St=t.get("EXT_texture_norm16"),St||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=_;if(_===i.RED&&(X===i.FLOAT&&(ot=i.R32F),X===i.HALF_FLOAT&&(ot=i.R16F),X===i.UNSIGNED_BYTE&&(ot=i.R8),X===i.UNSIGNED_SHORT&&St&&(ot=St.R16_EXT),X===i.SHORT&&St&&(ot=St.R16_SNORM_EXT)),_===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.R8UI),X===i.UNSIGNED_SHORT&&(ot=i.R16UI),X===i.UNSIGNED_INT&&(ot=i.R32UI),X===i.BYTE&&(ot=i.R8I),X===i.SHORT&&(ot=i.R16I),X===i.INT&&(ot=i.R32I)),_===i.RG&&(X===i.FLOAT&&(ot=i.RG32F),X===i.HALF_FLOAT&&(ot=i.RG16F),X===i.UNSIGNED_BYTE&&(ot=i.RG8),X===i.UNSIGNED_SHORT&&St&&(ot=St.RG16_EXT),X===i.SHORT&&St&&(ot=St.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.RG8UI),X===i.UNSIGNED_SHORT&&(ot=i.RG16UI),X===i.UNSIGNED_INT&&(ot=i.RG32UI),X===i.BYTE&&(ot=i.RG8I),X===i.SHORT&&(ot=i.RG16I),X===i.INT&&(ot=i.RG32I)),_===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),X===i.UNSIGNED_INT&&(ot=i.RGB32UI),X===i.BYTE&&(ot=i.RGB8I),X===i.SHORT&&(ot=i.RGB16I),X===i.INT&&(ot=i.RGB32I)),_===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),X===i.UNSIGNED_INT&&(ot=i.RGBA32UI),X===i.BYTE&&(ot=i.RGBA8I),X===i.SHORT&&(ot=i.RGBA16I),X===i.INT&&(ot=i.RGBA32I)),_===i.RGB&&(X===i.UNSIGNED_SHORT&&St&&(ot=St.RGB16_EXT),X===i.SHORT&&St&&(ot=St.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),_===i.RGBA){let ct=gt?Gs:ce.getTransfer(Q);X===i.FLOAT&&(ot=i.RGBA32F),X===i.HALF_FLOAT&&(ot=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ot=ct===_e?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&St&&(ot=St.RGBA16_EXT),X===i.SHORT&&St&&(ot=St.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function w(R,_){let X;return R?_===null||_===Tn||_===ys?X=i.DEPTH24_STENCIL8:_===An?X=i.DEPTH32F_STENCIL8:_===xs&&(X=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Tn||_===ys?X=i.DEPTH_COMPONENT24:_===An?X=i.DEPTH_COMPONENT32F:_===xs&&(X=i.DEPTH_COMPONENT16),X}function E(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==ke&&R.minFilter!==De?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function L(R){let _=R.target;_.removeEventListener("dispose",L),C(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function y(R){let _=R.target;_.removeEventListener("dispose",y),G(_)}function C(R){let _=n.get(R);if(_.__webglInit===void 0)return;let X=R.source,B=f.get(X);if(B){let Q=B[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(R),Object.keys(B).length===0&&f.delete(X)}n.remove(R)}function D(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let X=R.source,B=f.get(X);delete B[_.__cacheKey],a.memory.textures--}function G(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(_.__webglFramebuffer[B]))for(let Q=0;Q<_.__webglFramebuffer[B].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[B][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[B]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[B])}else{if(Array.isArray(_.__webglFramebuffer))for(let B=0;B<_.__webglFramebuffer.length;B++)i.deleteFramebuffer(_.__webglFramebuffer[B]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let B=0;B<_.__webglColorRenderbuffer.length;B++)_.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[B]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let X=R.textures;for(let B=0,Q=X.length;B<Q;B++){let gt=n.get(X[B]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(X[B])}n.remove(R)}let N=0;function O(){N=0}function I(){return N}function U(R){N=R}function J(){let R=N;return R>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function H(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function rt(R,_){let X=n.get(R);if(R.isVideoTexture&&V(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){let B=R.image;if(B===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(X,R,_);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+_)}function K(R,_){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){xt(X,R,_);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+_)}function j(R,_){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){xt(X,R,_);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+_)}function at(R,_){let X=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&X.__version!==R.version){Mt(X,R,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+_)}let pt={[la]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},ht={[ke]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[De]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},vt={[ru]:i.NEVER,[hu]:i.ALWAYS,[au]:i.LESS,[bo]:i.LEQUAL,[ou]:i.EQUAL,[wo]:i.GEQUAL,[lu]:i.GREATER,[cu]:i.NOTEQUAL};function dt(R,_){if(_.type===An&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===De||_.magFilter===za||_.magFilter===hr||_.magFilter===xi||_.minFilter===De||_.minFilter===za||_.minFilter===hr||_.minFilter===xi)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,pt[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,pt[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,pt[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,vt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ke||_.minFilter!==hr&&_.minFilter!==xi||_.type===An&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Pt(R,_){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",L));let B=_.source,Q=f.get(B);Q===void 0&&(Q={},f.set(B,Q));let gt=H(_);if(gt!==R.__cacheKey){Q[gt]===void 0&&(Q[gt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),Q[gt].usedTimes++;let St=Q[R.__cacheKey];St!==void 0&&(Q[R.__cacheKey].usedTimes--,St.usedTimes===0&&D(_)),R.__cacheKey=gt,R.__webglTexture=Q[gt].texture}return X}function Z(R,_,X){return Math.floor(Math.floor(R/X)/_)}function it(R,_,X,B){let gt=R.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,X,B,_.data);else{gt.sort((Vt,_t)=>Vt.start-_t.start);let St=0;for(let Vt=1;Vt<gt.length;Vt++){let _t=gt[St],bt=gt[Vt],Gt=_t.start+_t.count,Yt=Z(bt.start,_.width,4),Kt=Z(_t.start,_.width,4);bt.start<=Gt+1&&Yt===Kt&&Z(bt.start+bt.count-1,_.width,4)===Yt?_t.count=Math.max(_t.count,bt.start+bt.count-_t.start):(++St,gt[St]=bt)}gt.length=St+1;let ot=e.getParameter(i.UNPACK_ROW_LENGTH),ct=e.getParameter(i.UNPACK_SKIP_PIXELS),wt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Vt=0,_t=gt.length;Vt<_t;Vt++){let bt=gt[Vt],Gt=Math.floor(bt.start/4),Yt=Math.ceil(bt.count/4),Kt=Gt%_.width,k=Math.floor(Gt/_.width),Et=Yt,lt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,Kt,k,Et,lt,X,B,_.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt)}}function xt(R,_,X){let B=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(B=i.TEXTURE_3D);let Q=Pt(R,_),gt=_.source;e.bindTexture(B,R.__webglTexture,i.TEXTURE0+X);let St=n.get(gt);if(gt.version!==St.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let lt=ce.getPrimaries(ce.workingColorSpace),Tt=_.colorSpace===ti?null:ce.getPrimaries(_.colorSpace),Ct=_.colorSpace===ti||lt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ct=m(_.image,!1,s.maxTextureSize);ct=Ce(_,ct);let wt=r.convert(_.format,_.colorSpace),Vt=r.convert(_.type),_t=M(_.internalFormat,wt,Vt,_.normalized,_.colorSpace,_.isVideoTexture);dt(B,_);let bt,Gt=_.mipmaps,Yt=_.isVideoTexture!==!0,Kt=St.__version===void 0||Q===!0,k=gt.dataReady,Et=E(_,ct);if(_.isDepthTexture)_t=w(_.format===yi,_.type),Kt&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,_t,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,_t,ct.width,ct.height,0,wt,Vt,null));else if(_.isDataTexture)if(Gt.length>0){Yt&&Kt&&e.texStorage2D(i.TEXTURE_2D,Et,_t,Gt[0].width,Gt[0].height);for(let lt=0,Tt=Gt.length;lt<Tt;lt++)bt=Gt[lt],Yt?k&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,bt.width,bt.height,wt,Vt,bt.data):e.texImage2D(i.TEXTURE_2D,lt,_t,bt.width,bt.height,0,wt,Vt,bt.data);_.generateMipmaps=!1}else Yt?(Kt&&e.texStorage2D(i.TEXTURE_2D,Et,_t,ct.width,ct.height),k&&it(_,ct,wt,Vt)):e.texImage2D(i.TEXTURE_2D,0,_t,ct.width,ct.height,0,wt,Vt,ct.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Yt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,_t,Gt[0].width,Gt[0].height,ct.depth);for(let lt=0,Tt=Gt.length;lt<Tt;lt++)if(bt=Gt[lt],_.format!==mn)if(wt!==null)if(Yt){if(k)if(_.layerUpdates.size>0){let Ct=ic(bt.width,bt.height,_.format,_.type);for(let ut of _.layerUpdates){let Ht=bt.data.subarray(ut*Ct/bt.data.BYTES_PER_ELEMENT,(ut+1)*Ct/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,ut,bt.width,bt.height,1,wt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,bt.width,bt.height,ct.depth,wt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,_t,bt.width,bt.height,ct.depth,0,bt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,bt.width,bt.height,ct.depth,wt,Vt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,_t,bt.width,bt.height,ct.depth,0,wt,Vt,bt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Yt&&Kt&&e.texStorage2D(i.TEXTURE_2D,Et,_t,Gt[0].width,Gt[0].height);for(let lt=0,Tt=Gt.length;lt<Tt;lt++)bt=Gt[lt],_.format!==mn?wt!==null?Yt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,_t,bt.width,bt.height,0,bt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?k&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,bt.width,bt.height,wt,Vt,bt.data):e.texImage2D(i.TEXTURE_2D,lt,_t,bt.width,bt.height,0,wt,Vt,bt.data)}else if(_.isDataArrayTexture)if(Yt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,_t,ct.width,ct.height,ct.depth),k)if(_.layerUpdates.size>0){let lt=ic(ct.width,ct.height,_.format,_.type);for(let Tt of _.layerUpdates){let Ct=ct.data.subarray(Tt*lt/ct.data.BYTES_PER_ELEMENT,(Tt+1)*lt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,ct.width,ct.height,1,wt,Vt,Ct)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,wt,Vt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,ct.width,ct.height,ct.depth,0,wt,Vt,ct.data);else if(_.isData3DTexture)Yt?(Kt&&e.texStorage3D(i.TEXTURE_3D,Et,_t,ct.width,ct.height,ct.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,wt,Vt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,_t,ct.width,ct.height,ct.depth,0,wt,Vt,ct.data);else if(_.isFramebufferTexture){if(Kt)if(Yt)e.texStorage2D(i.TEXTURE_2D,Et,_t,ct.width,ct.height);else{let lt=ct.width,Tt=ct.height;for(let Ct=0;Ct<Et;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,_t,lt,Tt,0,wt,Vt,null),lt>>=1,Tt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let lt=i.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),ct.parentNode!==lt){lt.appendChild(ct),d.add(_),lt.onpaint=Tt=>{let Ct=Tt.changedElements;for(let ut of d)Ct.includes(ut.image)&&(ut.needsUpdate=!0)},lt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ct);else{let Ct=i.RGBA,ut=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ct,ut,Ht,ct)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(Yt&&Kt){let lt=de(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Et,_t,lt.width,lt.height)}for(let lt=0,Tt=Gt.length;lt<Tt;lt++)bt=Gt[lt],Yt?k&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,wt,Vt,bt):e.texImage2D(i.TEXTURE_2D,lt,_t,wt,Vt,bt);_.generateMipmaps=!1}else if(Yt){if(Kt){let lt=de(ct);e.texStorage2D(i.TEXTURE_2D,Et,_t,lt.width,lt.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Vt,ct)}else e.texImage2D(i.TEXTURE_2D,0,_t,wt,Vt,ct);p(_)&&T(B),St.__version=gt.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Mt(R,_,X){if(_.image.length!==6)return;let B=Pt(R,_),Q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);let gt=n.get(Q);if(Q.version!==gt.__version||B===!0){e.activeTexture(i.TEXTURE0+X);let St=ce.getPrimaries(ce.workingColorSpace),ot=_.colorSpace===ti?null:ce.getPrimaries(_.colorSpace),ct=_.colorSpace===ti||St===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let wt=_.isCompressedTexture||_.image[0].isCompressedTexture,Vt=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let ut=0;ut<6;ut++)!wt&&!Vt?_t[ut]=m(_.image[ut],!0,s.maxCubemapSize):_t[ut]=Vt?_.image[ut].image:_.image[ut],_t[ut]=Ce(_,_t[ut]);let bt=_t[0],Gt=r.convert(_.format,_.colorSpace),Yt=r.convert(_.type),Kt=M(_.internalFormat,Gt,Yt,_.normalized,_.colorSpace),k=_.isVideoTexture!==!0,Et=gt.__version===void 0||B===!0,lt=Q.dataReady,Tt=E(_,bt);dt(i.TEXTURE_CUBE_MAP,_);let Ct;if(wt){k&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Kt,bt.width,bt.height);for(let ut=0;ut<6;ut++){Ct=_t[ut].mipmaps;for(let Ht=0;Ht<Ct.length;Ht++){let Ft=Ct[Ht];_.format!==mn?Gt!==null?k?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht,0,0,Ft.width,Ft.height,Gt,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht,Kt,Ft.width,Ft.height,0,Ft.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht,0,0,Ft.width,Ft.height,Gt,Yt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht,Kt,Ft.width,Ft.height,0,Gt,Yt,Ft.data)}}}else{if(Ct=_.mipmaps,k&&Et){Ct.length>0&&Tt++;let ut=de(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Kt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Vt){k?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,_t[ut].width,_t[ut].height,Gt,Yt,_t[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Kt,_t[ut].width,_t[ut].height,0,Gt,Yt,_t[ut].data);for(let Ht=0;Ht<Ct.length;Ht++){let ye=Ct[Ht].image[ut].image;k?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht+1,0,0,ye.width,ye.height,Gt,Yt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht+1,Kt,ye.width,ye.height,0,Gt,Yt,ye.data)}}else{k?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Gt,Yt,_t[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Kt,Gt,Yt,_t[ut]);for(let Ht=0;Ht<Ct.length;Ht++){let Ft=Ct[Ht];k?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht+1,0,0,Gt,Yt,Ft.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ht+1,Kt,Gt,Yt,Ft.image[ut])}}}p(_)&&T(i.TEXTURE_CUBE_MAP),gt.__version=Q.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function mt(R,_,X,B,Q,gt){let St=r.convert(X.format,X.colorSpace),ot=r.convert(X.type),ct=M(X.internalFormat,St,ot,X.normalized,X.colorSpace),wt=n.get(_),Vt=n.get(X);if(Vt.__renderTarget=_,!wt.__hasExternalTextures){let _t=Math.max(1,_.width>>gt),bt=Math.max(1,_.height>>gt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,gt,ct,_t,bt,_.depth,0,St,ot,null):e.texImage2D(Q,gt,ct,_t,bt,0,St,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,Q,Vt.__webglTexture,0,pe(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,Q,Vt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(R,_,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let B=_.depthTexture,Q=B&&B.isDepthTexture?B.type:null,gt=w(_.stencilBuffer,Q),St=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(_),gt,_.width,_.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(_),gt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,gt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,R)}else{let B=_.textures;for(let Q=0;Q<B.length;Q++){let gt=B[Q],St=r.convert(gt.format,gt.colorSpace),ot=r.convert(gt.type),ct=M(gt.internalFormat,St,ot,gt.normalized,gt.colorSpace);xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(_),ct,_.width,_.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(_),ct,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ct,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(R,_,X){let B=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),B){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),dt(i.TEXTURE_CUBE_MAP,_.depthTexture);let wt=r.convert(_.depthTexture.format),Vt=r.convert(_.depthTexture.type),_t;_.depthTexture.format===Bn?_t=i.DEPTH_COMPONENT24:_.depthTexture.format===yi&&(_t=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,_t,_.width,_.height,0,wt,Vt,null)}}else rt(_.depthTexture,0);let gt=Q.__webglTexture,St=pe(_),ot=B?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,ct=_.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Bn)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ot,gt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ct,ot,gt,0);else if(_.depthTexture.format===yi)xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ot,gt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,ct,ot,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(R){let _=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let B=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),B){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,B.removeEventListener("dispose",Q)};B.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=B}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(X)for(let B=0;B<6;B++)ne(_.__webglFramebuffer[B],R,B);else{let B=R.texture.mipmaps;B&&B.length>0?ne(_.__webglFramebuffer[0],R,0):ne(_.__webglFramebuffer,R,0)}else if(X){_.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[B]),_.__webglDepthbuffer[B]===void 0)_.__webglDepthbuffer[B]=i.createRenderbuffer(),Lt(_.__webglDepthbuffer[B],R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=_.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,gt)}}else{let B=R.texture.mipmaps;if(B&&B.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Lt(_.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(R,_,X){let B=n.get(R);_!==void 0&&mt(B.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ot(R)}function $t(R){let _=R.texture,X=n.get(R),B=n.get(_);R.addEventListener("dispose",y);let Q=R.textures,gt=R.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=_.version,a.memory.textures++),gt){X.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer[ot]=[];for(let ct=0;ct<_.mipmaps.length;ct++)X.__webglFramebuffer[ot][ct]=i.createFramebuffer()}else X.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)X.__webglFramebuffer[ot]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(St)for(let ot=0,ct=Q.length;ot<ct;ot++){let wt=n.get(Q[ot]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&xe(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){let ct=Q[ot];X.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ot]);let wt=r.convert(ct.format,ct.colorSpace),Vt=r.convert(ct.type),_t=M(ct.internalFormat,wt,Vt,ct.normalized,ct.colorSpace,R.isXRRenderTarget===!0),bt=pe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,_t,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,X.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),dt(i.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ct=0;ct<_.mipmaps.length;ct++)mt(X.__webglFramebuffer[ot][ct],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ct);else mt(X.__webglFramebuffer[ot],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(_)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ot=0,ct=Q.length;ot<ct;ot++){let wt=Q[ot],Vt=n.get(wt),_t=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Vt.__webglTexture),dt(_t,wt),mt(X.__webglFramebuffer,R,wt,i.COLOR_ATTACHMENT0+ot,_t,0),p(wt)&&T(_t)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,B.__webglTexture),dt(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ct=0;ct<_.mipmaps.length;ct++)mt(X.__webglFramebuffer[ct],R,_,i.COLOR_ATTACHMENT0,ot,ct);else mt(X.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,ot,0);p(_)&&T(ot),e.unbindTexture()}R.depthBuffer&&Ot(R)}function Xt(R){let _=R.textures;for(let X=0,B=_.length;X<B;X++){let Q=_[X];if(p(Q)){let gt=A(R),St=n.get(Q).__webglTexture;e.bindTexture(gt,St),T(gt),e.unbindTexture()}}}let ue=[],be=[];function Ee(R){if(R.samples>0){if(xe(R)===!1){let _=R.textures,X=R.width,B=R.height,Q=i.COLOR_BUFFER_BIT,gt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(R),ot=_.length>1;if(ot)for(let wt=0;wt<_.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let ct=R.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let wt=0;wt<_.length;wt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[wt]);let Vt=n.get(_[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,X,B,0,0,X,B,Q,i.NEAREST),c===!0&&(ue.length=0,be.length=0,ue.push(i.COLOR_ATTACHMENT0+wt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ue.push(gt),be.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let wt=0;wt<_.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,St.__webglColorRenderbuffer[wt]);let Vt=n.get(_[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function pe(R){return Math.min(s.maxSamples,R.samples)}function xe(R){let _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function V(R){let _=a.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function Ce(R,_){let X=R.colorSpace,B=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Vs&&X!==ti&&(ce.getTransfer(X)===_e?(B!==mn||Q!==hn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",X)),_}function de(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=U,this.setTexture2D=rt,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=at,this.rebindTextures=qt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function d_(i,t){function e(n,s=ti){let r,a=ce.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wl)return i.BYTE;if(n===Xl)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===ka)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===$l)return i.ALPHA;if(n===Zl)return i.RGB;if(n===mn)return i.RGBA;if(n===Bn)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===Jl)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===vi)return i.RG;if(n===Wa)return i.RG_INTEGER;if(n===Xa)return i.RGBA_INTEGER;if(n===ur||n===dr||n===fr||n===pr)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ya||n===$a||n===Za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Ka||n===ja||n===Qa||n===to||n===mr||n===eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===Ka)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qa)return r.COMPRESSED_R11_EAC;if(n===to)return r.COMPRESSED_SIGNED_R11_EAC;if(n===mr)return r.COMPRESSED_RG11_EAC;if(n===eo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===no)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===io)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===co)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ho)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===po)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===go)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===xo||n===yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vo||n===Mo||n===gr||n===So)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new nr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:f_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bc=class extends zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Sc,p={},T=e.getContextAttributes(),A=null,M=null,w=[],E=[],L=new le,y=null,C=null,D=new We;D.viewport=new Ae;let G=new We;G.viewport=new Ae;let N=[D,G],O=new Ua,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=w[Z];return it===void 0&&(it=new ps,w[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=w[Z];return it===void 0&&(it=new ps,w[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=w[Z];return it===void 0&&(it=new ps,w[Z]=it),it.getHandSpace()};function J(Z){let it=E.indexOf(Z.inputSource);if(it===-1)return;let xt=w[it];xt!==void 0&&(xt.update(Z.inputSource,Z.frame,l||a),xt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",rt);for(let Z=0;Z<w.length;Z++){let it=E[Z];it!==null&&(E[Z]=null,w[Z].disconnect(it))}I=null,U=null,m.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(A),f=null,h=null,d=null,s=null,M=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(L.width,L.height,!1),C!==null){let Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",H),s.addEventListener("inputsourceschange",rt),T.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Mt=null,mt=null;T.depth&&(mt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=T.stencil?yi:Bn,Mt=T.stencil?ys:Tn);let Lt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Lt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new tn(h.textureWidth,h.textureHeight,{format:mn,type:hn,depthTexture:new di(h.textureWidth,h.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new tn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Pt.setContext(s),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(Z){for(let it=0;it<Z.removed.length;it++){let xt=Z.removed[it],Mt=E.indexOf(xt);Mt>=0&&(E[Mt]=null,w[Mt].disconnect(xt))}for(let it=0;it<Z.added.length;it++){let xt=Z.added[it],Mt=E.indexOf(xt);if(Mt===-1){for(let Lt=0;Lt<w.length;Lt++)if(Lt>=E.length){E.push(xt),Mt=Lt;break}else if(E[Lt]===null){E[Lt]=xt,Mt=Lt;break}if(Mt===-1)break}let mt=w[Mt];mt&&mt.connect(xt)}}let K=new q,j=new q;function at(Z,it,xt){K.setFromMatrixPosition(it.matrixWorld),j.setFromMatrixPosition(xt.matrixWorld);let Mt=K.distanceTo(j),mt=it.projectionMatrix.elements,Lt=xt.projectionMatrix.elements,ne=mt[14]/(mt[10]-1),Ot=mt[14]/(mt[10]+1),qt=(mt[9]+1)/mt[5],$t=(mt[9]-1)/mt[5],Xt=(mt[8]-1)/mt[0],ue=(Lt[8]+1)/Lt[0],be=ne*Xt,Ee=ne*ue,pe=Mt/(-Xt+ue),xe=pe*-Xt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xe),Z.translateZ(pe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),mt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let V=ne+pe,Ce=Ot+pe,de=be-xe,R=Ee+(Mt-xe),_=qt*Ot/Ce*V,X=$t*Ot/Ce*V;Z.projectionMatrix.makePerspective(de,R,_,X,V,Ce),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function pt(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,xt=Z.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),O.near=G.near=D.near=it,O.far=G.far=D.far=xt,(I!==O.near||U!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,U=O.far),O.layers.mask=Z.layers.mask|6,D.layers.mask=O.layers.mask&-5,G.layers.mask=O.layers.mask&-3;let Mt=Z.parent,mt=O.cameras;pt(O,Mt);for(let Lt=0;Lt<mt.length;Lt++)pt(mt[Lt],Mt);mt.length===2?at(O,D,G):O.projectionMatrix.copy(D.projectionMatrix),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),ht(Z,O,Mt)};function ht(Z,it,xt){xt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(xt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ua*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return p[Z]};let vt=null;function dt(Z,it){if(u=it.getViewerPose(l||a),g=it,u!==null){let xt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Mt=!1;xt.length!==O.cameras.length&&(O.cameras.length=0,Mt=!0);for(let Ot=0;Ot<xt.length;Ot++){let qt=xt[Ot],$t=null;if(f!==null)$t=f.getViewport(qt);else{let ue=d.getViewSubImage(h,qt);$t=ue.viewport,Ot===0&&(t.setRenderTargetTextures(M,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(M))}let Xt=N[Ot];Xt===void 0&&(Xt=new We,Xt.layers.enable(Ot),Xt.viewport=new Ae,N[Ot]=Xt),Xt.matrix.fromArray(qt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(qt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set($t.x,$t.y,$t.width,$t.height),Ot===0&&(O.matrix.copy(Xt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Mt===!0&&O.cameras.push(Xt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Ot=d.getDepthInformation(xt[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(mt&&mt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Ot=0;Ot<xt.length;Ot++){let qt=xt[Ot].camera;if(qt){let $t=p[qt];$t||($t=new nr,p[qt]=$t);let Xt=d.getCameraImage(qt);$t.sourceTexture=Xt}}}}for(let xt=0;xt<w.length;xt++){let Mt=E[xt],mt=w[xt];Mt!==null&&mt!==void 0&&mt.update(Mt,it,l||a)}vt&&vt(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let Pt=new Vu;Pt.setAnimationLoop(dt),this.setAnimationLoop=function(Z){vt=Z},this.dispose=function(){}}},m_=new Te,Yu=new ee;Yu.set(-1,0,0,0,1,0,0,0,1);function g_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),A=T.envMap,M=T.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(m_.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function __(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){let E=w.program;n.uniformBlockBinding(M,E)}function l(M,w){let E=s[M.id];E===void 0&&(m(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",T));let L=w.program;n.updateUBOMapping(M,L);let y=t.render.frame;r[M.id]!==y&&(h(M),r[M.id]=y)}function u(M){let w=d();M.__bindingPointIndex=w;let E=i.createBuffer(),L=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let w=s[M.id],E=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let y=0,C=E.length;y<C;y++){let D=E[y];if(Array.isArray(D))for(let G=0,N=D.length;G<N;G++)f(D[G],y,G,L);else f(D,y,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,w,E,L){if(x(M,w,E,L)===!0){let y=M.__offset,C=M.value;if(Array.isArray(C)){let D=0;for(let G=0;G<C.length;G++){let N=C[G],O=p(N);g(N,M.__data,D),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,M.__data)}}function g(M,w,E){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,E)}function x(M,w,E,L){let y=M.value,C=w+"_"+E;if(L[C]===void 0)return typeof y=="number"||typeof y=="boolean"?L[C]=y:ArrayBuffer.isView(y)?L[C]=y.slice():L[C]=y.clone(),!0;{let D=L[C];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return L[C]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function m(M){let w=M.uniforms,E=0,L=16;for(let C=0,D=w.length;C<D;C++){let G=Array.isArray(w[C])?w[C]:[w[C]];for(let N=0,O=G.length;N<O;N++){let I=G[N],U=Array.isArray(I.value)?I.value:[I.value];for(let J=0,H=U.length;J<H;J++){let rt=U[J],K=p(rt),j=E%L,at=j%K.boundary,pt=j+at;E+=at,pt!==0&&L-pt<K.storage&&(E+=L-pt),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=K.storage}}}let y=E%L;return y>0&&(E+=L-y),M.__size=E,M.__cache={},this}function p(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",M),w}function T(M){let w=M.target;w.removeEventListener("dispose",T);let E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var x_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function y_(){return Hn===null&&(Hn=new ga(x_,16,16,vi,Cn),Hn.name="DFG_LUT",Hn.minFilter=De,Hn.magFilter=De,Hn.wrapS=On,Hn.wrapT=On,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var Ro=class{constructor(t={}){let{canvas:e=uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=hn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,m=new Set([Xa,Wa,Ha]),p=new Set([hn,Tn,xs,ys,Va,Ga]),T=new Uint32Array(4),A=new Int32Array(4),M=new q,w=null,E=null,L=[],y=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,G=!1,N=null,O=null,I=null,U=null;this._outputColorSpace=ze;let J=0,H=0,rt=null,K=-1,j=null,at=new Ae,pt=new Ae,ht=null,vt=new se(0),dt=0,Pt=e.width,Z=e.height,it=1,xt=null,Mt=null,mt=new Ae(0,0,Pt,Z),Lt=new Ae(0,0,Pt,Z),ne=!1,Ot=new Qs,qt=!1,$t=!1,Xt=new Te,ue=new q,be=new Ae,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function xe(){return rt===null?it:1}let V=n;function Ce(v,F){return e.getContext(v,F)}let de,R,_,X,B,Q,gt,St,ot,ct,wt,Vt,_t,bt,Gt,Yt,Kt,k,Et,lt,Tt,Ct,ut;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",sn,!1),V===null){let F="webgl2";if(V=Ce(F,v),V===null)throw Ce(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(v){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),jt("WebGLRenderer: "+v.message),v}function Ht(){de=new Tg(V),de.init(),Tt=new d_(V,de),R=new gg(V,de,t,Tt),_=new h_(V,de),R.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),O=V.createFramebuffer(),I=V.createFramebuffer(),U=V.createFramebuffer(),X=new Rg(V),B=new J0,Q=new u_(V,de,_,B,R,Tt,X),gt=new Eg(D),St=new Pf(V),Ct=new pg(V,St),ot=new Ag(V,St,X,Ct),ct=new Pg(V,ot,St,Ct,X),k=new Ig(V,R,Q),Gt=new _g(B),wt=new Z0(D,gt,de,R,Ct,Gt),Vt=new g_(D,B),_t=new j0,bt=new s_(de),Kt=new fg(D,gt,_,ct,g,c),Yt=new c_(D,ct,R),ut=new __(V,X,R,_),Et=new mg(V,de,X),lt=new Cg(V,de,X),X.programs=wt.programs,D.capabilities=R,D.extensions=de,D.properties=B,D.renderLists=_t,D.shadowMap=Yt,D.state=_,D.info=X}x!==hn&&(C=new Dg(x,e.width,e.height,o,s,r));let Ft=new bc(D,V);this.xr=Ft,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let v=de.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=de.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(v){v!==void 0&&(it=v,this.setSize(Pt,Z,!1))},this.getSize=function(v){return v.set(Pt,Z)},this.setSize=function(v,F,nt=!0){if(Ft.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Pt=v,Z=F,e.width=Math.floor(v*it),e.height=Math.floor(F*it),nt===!0&&(e.style.width=v+"px",e.style.height=F+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(Pt*it,Z*it).floor()},this.setDrawingBufferSize=function(v,F,nt){Pt=v,Z=F,it=nt,e.width=Math.floor(v*nt),e.height=Math.floor(F*nt),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(x===hn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(at)},this.getViewport=function(v){return v.copy(mt)},this.setViewport=function(v,F,nt,$){v.isVector4?mt.set(v.x,v.y,v.z,v.w):mt.set(v,F,nt,$),_.viewport(at.copy(mt).multiplyScalar(it).round())},this.getScissor=function(v){return v.copy(Lt)},this.setScissor=function(v,F,nt,$){v.isVector4?Lt.set(v.x,v.y,v.z,v.w):Lt.set(v,F,nt,$),_.scissor(pt.copy(Lt).multiplyScalar(it).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(v){_.setScissorTest(ne=v)},this.setOpaqueSort=function(v){xt=v},this.setTransparentSort=function(v){Mt=v},this.getClearColor=function(v){return v.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,nt=!0){let $=0;if(v){let Y=!1;if(rt!==null){let At=rt.texture.format;Y=m.has(At)}if(Y){let At=rt.texture.type,Dt=p.has(At),Rt=Kt.getClearColor(),Nt=Kt.getClearAlpha(),Bt=Rt.r,re=Rt.g,oe=Rt.b;Dt?(T[0]=Bt,T[1]=re,T[2]=oe,T[3]=Nt,V.clearBufferuiv(V.COLOR,0,T)):(A[0]=Bt,A[1]=re,A[2]=oe,A[3]=Nt,V.clearBufferiv(V.COLOR,0,A))}else $|=V.COLOR_BUFFER_BIT}F&&($|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",sn,!1),Kt.dispose(),_t.dispose(),bt.dispose(),B.dispose(),gt.dispose(),ct.dispose(),Ct.dispose(),ut.dispose(),wt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",rn),Ft.removeEventListener("sessionend",Ie),Dn.stop()};function ye(v){v.preventDefault(),Xs("WebGLRenderer: Context Lost."),G=!0}function me(){Xs("WebGLRenderer: Context Restored."),G=!1;let v=X.autoReset,F=Yt.enabled,nt=Yt.autoUpdate,$=Yt.needsUpdate,Y=Yt.type;Ht(),X.autoReset=v,Yt.enabled=F,Yt.autoUpdate=nt,Yt.needsUpdate=$,Yt.type=Y}function sn(v){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Qe(v){let F=v.target;F.removeEventListener("dispose",Qe),bi(F)}function bi(v){Yo(v),B.remove(v)}function Yo(v){let F=B.get(v).programs;F!==void 0&&(F.forEach(function(nt){wt.releaseProgram(nt)}),v.isShaderMaterial&&wt.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,nt,$,Y,At){F===null&&(F=Ee);let Dt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Rt=wi(v,F,nt,$,Y);_.setMaterial($,Dt);let Nt=nt.index,Bt=1;if($.wireframe===!0){if(Nt=ot.getWireframeAttribute(nt),Nt===void 0)return;Bt=2}let re=nt.drawRange,oe=nt.attributes.position,Ut=re.start*Bt,fe=(re.start+re.count)*Bt;At!==null&&(Ut=Math.max(Ut,At.start*Bt),fe=Math.min(fe,(At.start+At.count)*Bt)),Nt!==null?(Ut=Math.max(Ut,0),fe=Math.min(fe,Nt.count)):oe!=null&&(Ut=Math.max(Ut,0),fe=Math.min(fe,oe.count));let Re=fe-Ut;if(Re<0||Re===1/0)return;Ct.setup(Y,$,Rt,nt,Nt);let S,P=Et;if(Nt!==null&&(S=St.get(Nt),P=lt,P.setIndex(S)),Y.isMesh)$.wireframe===!0?(_.setLineWidth($.wireframeLinewidth*xe()),P.setMode(V.LINES)):P.setMode(V.TRIANGLES);else if(Y.isLine){let tt=$.linewidth;tt===void 0&&(tt=1),_.setLineWidth(tt*xe()),Y.isLineSegments?P.setMode(V.LINES):Y.isLineLoop?P.setMode(V.LINE_LOOP):P.setMode(V.LINE_STRIP)}else Y.isPoints?P.setMode(V.POINTS):Y.isSprite&&P.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(de.get("WEBGL_multi_draw"))P.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let tt=Y._multiDrawStarts,z=Y._multiDrawCounts,et=Y._multiDrawCount,st=Nt?St.get(Nt).bytesPerElement:1,ft=B.get($).currentProgram.getUniforms();for(let yt=0;yt<et;yt++)ft.setValue(V,"_gl_DrawID",yt),P.render(tt[yt]/st,z[yt])}else if(Y.isInstancedMesh)P.renderInstances(Ut,Re,Y.count);else if(nt.isInstancedBufferGeometry){let tt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,z=Math.min(nt.instanceCount,tt);P.renderInstances(Ut,Re,z)}else P.render(Ut,Re)};function Hi(v,F,nt,$){N!==null&&v.isNodeMaterial&&N.setObject($,v),qt===!0&&Gt.setState(v,nt,!1),v.transparent===!0&&v.side===pn&&v.forceSinglePass===!1?(v.side=je,v.needsUpdate=!0,$e(v,F,$),v.side=gi,v.needsUpdate=!0,$e(v,F,$),v.side=pn):$e(v,F,$)}this.compile=function(v,F,nt=null){nt===null&&(nt=v),N!==null&&N.renderStart(v,F,nt),E=bt.get(nt),E.init(F),y.push(E),nt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),v!==nt&&v.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),$t=this.localClippingEnabled,qt=Gt.init(this.clippingPlanes,$t),qt===!0&&Gt.setGlobalState(this.clippingPlanes,F),N!==null&&Yt.render(E.state.shadowsArray,nt,F);let $=new Set;return v.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let At=Y.material;if(At)if(Array.isArray(At))for(let Dt=0;Dt<At.length;Dt++){let Rt=At[Dt];Hi(Rt,nt,F,Y),$.add(Rt)}else Hi(At,nt,F,Y),$.add(At)}),E=y.pop(),N!==null&&N.renderEnd(),$},this.compileAsync=function(v,F,nt=null){let $=this.compile(v,F,nt);return new Promise(Y=>{function At(){if($.forEach(function(Dt){let Nt=B.get(Dt).currentProgram;(Nt===void 0||Nt.isReady())&&$.delete(Dt)}),$.size===0){Y(v);return}setTimeout(At,10)}de.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Cs=null;function $o(v){Cs&&Cs(v)}function rn(){Dn.stop()}function Ie(){Dn.start()}let Dn=new Vu;Dn.setAnimationLoop($o),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(v){Cs=v,Ft.setAnimationLoop(v),v===null?Dn.stop():Dn.start()},Ft.addEventListener("sessionstart",rn),Ft.addEventListener("sessionend",Ie),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;N!==null&&N.renderStart(v,F);let nt=Ft.enabled===!0&&Ft.isPresenting===!0,$=C!==null&&(rt===null||nt)&&C.begin(D,rt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(F),F=Ft.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,F,rt),E=bt.get(v,y.length),E.init(F),E.state.textureUnits=Q.getTextureUnits(),y.push(E),Xt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ot.setFromProjectionMatrix(Xt,Sn,F.reversedDepth),$t=this.localClippingEnabled,qt=Gt.init(this.clippingPlanes,$t),w=_t.get(v,L.length),w.init(),L.push(w),Ft.enabled===!0&&Ft.isPresenting===!0){let Dt=D.xr.getDepthSensingMesh();Dt!==null&&Wi(Dt,F,-1/0,D.sortObjects)}Wi(v,F,0,D.sortObjects),w.finish(),N!==null&&N.updateLights(E.state.lightsArray),D.sortObjects===!0&&w.sort(xt,Mt),pe=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,pe&&Kt.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qt===!0&&Gt.beginShadows();let Y=E.state.shadowsArray;if(Yt.render(Y,v,F),qt===!0&&Gt.endShadows(),($&&C.hasRenderPass())===!1){let Dt=w.opaque,Rt=w.transmissive;if(E.setupLights(),F.isArrayCamera){let Nt=F.cameras;if(Rt.length>0)for(let Bt=0,re=Nt.length;Bt<re;Bt++){let oe=Nt[Bt];Xi(Dt,Rt,v,oe)}pe&&Kt.render(v);for(let Bt=0,re=Nt.length;Bt<re;Bt++){let oe=Nt[Bt];gn(w,v,oe,oe.viewport)}}else Rt.length>0&&Xi(Dt,Rt,v,F),pe&&Kt.render(v),gn(w,v,F)}rt!==null&&H===0&&(Q.updateMultisampleRenderTarget(rt),Q.updateRenderTargetMipmap(rt)),$&&C.end(D),v.isScene===!0&&v.onAfterRender(D,v,F),Ct.resetDefaultState(),K=-1,j=null,y.pop(),y.length>0?(E=y[y.length-1],Q.setTextureUnits(E.state.textureUnits),qt===!0&&Gt.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,L.pop(),L.length>0?w=L[L.length-1]:w=null,N!==null&&N.renderEnd()};function Wi(v,F,nt,$){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)nt=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Ot)){$&&be.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Xt);let Dt=ct.update(v),Rt=v.material;Rt.visible&&w.push(v,Dt,Rt,nt,be.z,null,F)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Ot))){let Dt=ct.update(v),Rt=v.material;if($&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),be.copy(v.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),be.copy(Dt.boundingSphere.center)),be.applyMatrix4(v.matrixWorld).applyMatrix4(Xt)),Array.isArray(Rt)){let Nt=Dt.groups;for(let Bt=0,re=Nt.length;Bt<re;Bt++){let oe=Nt[Bt],Ut=Rt[oe.materialIndex];Ut&&Ut.visible&&w.push(v,Dt,Ut,nt,be.z,oe,F)}}else Rt.visible&&w.push(v,Dt,Rt,nt,be.z,null,F)}}let At=v.children;for(let Dt=0,Rt=At.length;Dt<Rt;Dt++)Wi(At[Dt],F,nt,$)}function gn(v,F,nt,$){let{opaque:Y,transmissive:At,transparent:Dt}=v;E.setupLightsView(nt),qt===!0&&Gt.setGlobalState(D.clippingPlanes,nt),$&&_.viewport(at.copy($)),Y.length>0&&qn(Y,F,nt),At.length>0&&qn(At,F,nt),Dt.length>0&&qn(Dt,F,nt),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Xi(v,F,nt,$){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){let Ut=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new tn(1,1,{generateMipmaps:!0,type:Ut?Cn:hn,minFilter:xi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let At=E.state.transmissionRenderTarget[$.id],Dt=$.viewport||at;At.setSize(Dt.z*D.transmissionResolutionScale,Dt.w*D.transmissionResolutionScale);let Rt=D.getRenderTarget(),Nt=D.getActiveCubeFace(),Bt=D.getActiveMipmapLevel();D.setRenderTarget(At),D.getClearColor(vt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),pe&&Kt.render(nt);let re=D.toneMapping;D.toneMapping=En;let oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),qt===!0&&Gt.setGlobalState(D.clippingPlanes,$),qn(v,nt,$),Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At),de.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let fe=0,Re=F.length;fe<Re;fe++){let S=F[fe],{object:P,geometry:tt,material:z,group:et}=S;if(z.side===pn&&P.layers.test($.layers)){let st=z.side;z.side=je,z.needsUpdate=!0,Rs(P,nt,$,tt,z,et),z.side=st,z.needsUpdate=!0,Ut=!0}}Ut===!0&&(Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At))}D.setRenderTarget(Rt,Nt,Bt),D.setClearColor(vt,dt),oe!==void 0&&($.viewport=oe),D.toneMapping=re}function qn(v,F,nt){let $=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,At=v.length;Y<At;Y++){let Dt=v[Y],{object:Rt,geometry:Nt,group:Bt}=Dt,re=Dt.material;re.allowOverride===!0&&$!==null&&(re=$),Rt.layers.test(nt.layers)&&Rs(Rt,F,nt,Nt,re,Bt)}}function Rs(v,F,nt,$,Y,At){N!==null&&Y.isNodeMaterial&&N.setObject(v,Y),v.onBeforeRender(D,F,nt,$,Y,At),v.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),Y.onBeforeRender(D,F,nt,$,v,At),Y.transparent===!0&&Y.side===pn&&Y.forceSinglePass===!1?(Y.side=je,Y.needsUpdate=!0,D.renderBufferDirect(nt,F,$,Y,v,At),Y.side=gi,Y.needsUpdate=!0,D.renderBufferDirect(nt,F,$,Y,v,At),Y.side=pn):D.renderBufferDirect(nt,F,$,Y,v,At),v.onAfterRender(D,F,nt,$,Y,At)}function $e(v,F,nt){F.isScene!==!0&&(F=Ee);let $=B.get(v),Y=E.state.lights,At=E.state.shadowsArray,Dt=Y.state.version,Rt=wt.getParameters(v,Y.state,At,F,nt,E.state.lightProbeGridArray),Nt=wt.getProgramCacheKey(Rt),Bt=$.programs;$.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,$.fog=F.fog;let re=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;$.envMap=gt.get(v.envMap||$.environment,re),$.envMapRotation=$.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,Bt===void 0&&(v.addEventListener("dispose",Qe),Bt=new Map,$.programs=Bt);let oe=Bt.get(Nt);if(oe!==void 0){if($.currentProgram===oe&&$.lightsStateVersion===Dt)return Is(v,Rt),oe}else Rt.uniforms=wt.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,nt,Rt),v.onBeforeCompile(Rt,D),oe=wt.acquireProgram(Rt,Nt),Bt.set(Nt,oe),$.uniforms=Rt.uniforms;let Ut=$.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ut.clippingPlanes=Gt.uniform),Is(v,Rt),$.needsLights=Jo(v),$.lightsStateVersion=Dt,$.needsLights&&(Ut.ambientLightColor.value=Y.state.ambient,Ut.lightProbe.value=Y.state.probe,Ut.sunLights.value=Y.state.sun,Ut.sunLightShadows.value=Y.state.sunShadow,Ut.directionalLights.value=Y.state.directional,Ut.directionalLightShadows.value=Y.state.directionalShadow,Ut.spotLights.value=Y.state.spot,Ut.spotLightShadows.value=Y.state.spotShadow,Ut.rectAreaLights.value=Y.state.rectArea,Ut.ltc_1.value=Y.state.rectAreaLTC1,Ut.ltc_2.value=Y.state.rectAreaLTC2,Ut.pointLights.value=Y.state.point,Ut.pointLightShadows.value=Y.state.pointShadow,Ut.hemisphereLights.value=Y.state.hemi,Ut.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ut.sunShadowCascade.value=Y.state.sunShadowCascade,Ut.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ut.spotLightMatrix.value=Y.state.spotLightMatrix,Ut.spotLightMap.value=Y.state.spotLightMap,Ut.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.lightProbeGrid=E.state.lightProbeGridArray.length>0,$.currentProgram=oe,$.uniformsList=null,oe}function _n(v){if(v.uniformsList===null){let F=v.currentProgram.getUniforms();v.uniformsList=Ss.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function Is(v,F){let nt=B.get(v);nt.outputColorSpace=F.outputColorSpace,nt.batching=F.batching,nt.batchingColor=F.batchingColor,nt.instancing=F.instancing,nt.instancingColor=F.instancingColor,nt.instancingMorph=F.instancingMorph,nt.skinning=F.skinning,nt.morphTargets=F.morphTargets,nt.morphNormals=F.morphNormals,nt.morphColors=F.morphColors,nt.morphTargetsCount=F.morphTargetsCount,nt.numClippingPlanes=F.numClippingPlanes,nt.numIntersection=F.numClipIntersection,nt.vertexAlphas=F.vertexAlphas,nt.vertexTangents=F.vertexTangents,nt.toneMapping=F.toneMapping}function Zo(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let nt=0,$=v.length;nt<$;nt++){let Y=v[nt];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function wi(v,F,nt,$,Y){F.isScene!==!0&&(F=Ee),Q.resetTextureUnits();let At=F.fog,Dt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?F.environment:null,Rt=rt===null?D.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ce.workingColorSpace,Nt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Bt=gt.get($.envMap||Dt,Nt),re=$.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,oe=!!nt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ut=!!nt.morphAttributes.position,fe=!!nt.morphAttributes.normal,Re=!!nt.morphAttributes.color,S=En;$.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(S=D.toneMapping);let P=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,tt=P!==void 0?P.length:0,z=B.get($),et=E.state.lights;if(qt===!0&&($t===!0||v!==j)){let ie=v===j&&$.id===K;Gt.setState($,v,ie)}let st=!1;$.version===z.__version?(z.needsLights&&z.lightsStateVersion!==et.state.version||z.outputColorSpace!==Rt||Y.isBatchedMesh&&z.batching===!1||!Y.isBatchedMesh&&z.batching===!0||Y.isBatchedMesh&&z.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&z.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&z.instancing===!1||!Y.isInstancedMesh&&z.instancing===!0||Y.isSkinnedMesh&&z.skinning===!1||!Y.isSkinnedMesh&&z.skinning===!0||Y.isInstancedMesh&&z.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&z.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&z.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&z.instancingMorph===!1&&Y.morphTexture!==null||z.envMap!==Bt||$.fog===!0&&z.fog!==At||z.numClippingPlanes!==void 0&&(z.numClippingPlanes!==Gt.numPlanes||z.numIntersection!==Gt.numIntersection)||z.vertexAlphas!==re||z.vertexTangents!==oe||z.morphTargets!==Ut||z.morphNormals!==fe||z.morphColors!==Re||z.toneMapping!==S||z.morphTargetsCount!==tt||!!z.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,z.__version=$.version);let ft=z.currentProgram;st===!0&&(ft=$e($,F,Y),N&&$.isNodeMaterial&&N.onUpdateProgram($,ft,z));let yt=!1,Wt=!1,Jt=!1,kt=ft.getUniforms(),te=z.uniforms;if(_.useProgram(ft.program)&&(yt=!0,Wt=!0,Jt=!0),$.id!==K&&(K=$.id,Wt=!0),z.needsLights){let ie=Zo(E.state.lightProbeGridArray,Y);z.lightProbeGrid!==ie&&(z.lightProbeGrid=ie,Wt=!0)}if(yt||j!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),kt.setValue(V,"projectionMatrix",v.projectionMatrix),kt.setValue(V,"viewMatrix",v.matrixWorldInverse);let Oe=kt.map.cameraPosition;Oe!==void 0&&Oe.setValue(V,ue.setFromMatrixPosition(v.matrixWorld)),R.logarithmicDepthBuffer&&kt.setValue(V,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&kt.setValue(V,"isOrthographic",v.isOrthographicCamera===!0),j!==v&&(j=v,Wt=!0,Jt=!0)}if(z.needsLights&&(et.state.sunShadowMap.length>0&&kt.setValue(V,"sunShadowMap",et.state.sunShadowMap,Q),et.state.directionalShadowMap.length>0&&kt.setValue(V,"directionalShadowMap",et.state.directionalShadowMap,Q),et.state.spotShadowMap.length>0&&kt.setValue(V,"spotShadowMap",et.state.spotShadowMap,Q),et.state.pointShadowMap.length>0&&kt.setValue(V,"pointShadowMap",et.state.pointShadowMap,Q)),Y.isSkinnedMesh){kt.setOptional(V,Y,"bindMatrix"),kt.setOptional(V,Y,"bindMatrixInverse");let ie=Y.skeleton;ie&&(ie.boneTexture===null&&ie.computeBoneTexture(),kt.setValue(V,"boneTexture",ie.boneTexture,Q))}Y.isBatchedMesh&&(kt.setOptional(V,Y,"batchingTexture"),kt.setValue(V,"batchingTexture",Y._matricesTexture,Q),kt.setOptional(V,Y,"batchingIdTexture"),kt.setValue(V,"batchingIdTexture",Y._indirectTexture,Q),kt.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&kt.setValue(V,"batchingColorTexture",Y._colorsTexture,Q));let ge=nt.morphAttributes;if((ge.position!==void 0||ge.normal!==void 0||ge.color!==void 0)&&k.update(Y,nt,ft),(Wt||z.receiveShadow!==Y.receiveShadow)&&(z.receiveShadow=Y.receiveShadow,kt.setValue(V,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&F.environment!==null&&(te.envMapIntensity.value=F.environmentIntensity),te.dfgLUT!==void 0&&(te.dfgLUT.value=y_()),Wt){if(kt.setValue(V,"toneMappingExposure",D.toneMappingExposure),z.needsLights&&Ei(te,Jt),At&&$.fog===!0&&Vt.refreshFogUniforms(te,At),Vt.refreshMaterialUniforms(te,$,it,Z,E.state.transmissionRenderTarget[v.id]),z.needsLights&&z.lightProbeGrid){let ie=z.lightProbeGrid;te.probesSH.value=ie.texture,te.probesMin.value.copy(ie.boundingBox.min),te.probesMax.value.copy(ie.boundingBox.max),te.probesResolution.value.copy(ie.resolution)}Ss.upload(V,_n(z),te,Q)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ss.upload(V,_n(z),te,Q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&kt.setValue(V,"center",Y.center),kt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),kt.setValue(V,"normalMatrix",Y.normalMatrix),kt.setValue(V,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){let ie=$.uniformsGroups;for(let Oe=0,dn=ie.length;Oe<dn;Oe++){let qi=ie[Oe];ut.update(qi,ft),ut.bind(qi,ft)}}return ft}function Ei(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.sunLights.needsUpdate=F,v.sunLightShadows.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function Jo(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(v,F,nt){let $=B.get(v);$.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),B.get(v.texture).__webglTexture=F,B.get(v.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:nt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){let nt=B.get(v);nt.__webglFramebuffer=F,nt.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(v,F=0,nt=0){rt=v,J=F,H=nt;let $=null,Y=!1,At=!1;if(v){let Rt=B.get(v);if(Rt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(V.FRAMEBUFFER,Rt.__webglFramebuffer),at.copy(v.viewport),pt.copy(v.scissor),ht=v.scissorTest,_.viewport(at),_.scissor(pt),_.setScissorTest(ht),K=-1;return}else if(Rt.__webglFramebuffer===void 0)Q.setupRenderTarget(v);else if(Rt.__hasExternalTextures)Q.rebindTextures(v,B.get(v.texture).__webglTexture,B.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let re=v.depthTexture;if(Rt.__boundDepthTexture!==re){if(re!==null&&B.has(re)&&(v.width!==re.image.width||v.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(v)}}let Nt=v.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);let Bt=B.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?$=Bt[F][nt]:$=Bt[F],Y=!0):v.samples>0&&Q.useMultisampledRTT(v)===!1?$=B.get(v).__webglMultisampledFramebuffer:Array.isArray(Bt)?$=Bt[nt]:$=Bt,at.copy(v.viewport),pt.copy(v.scissor),ht=v.scissorTest}else at.copy(mt).multiplyScalar(it).floor(),pt.copy(Lt).multiplyScalar(it).floor(),ht=ne;if(nt!==0&&($=O),_.bindFramebuffer(V.FRAMEBUFFER,$)&&_.drawBuffers(v,$),_.viewport(at),_.scissor(pt),_.setScissorTest(ht),Y){let Rt=B.get(v.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,Rt.__webglTexture,nt)}else if(At){let Rt=F;for(let Nt=0;Nt<v.textures.length;Nt++){let Bt=B.get(v.textures[Nt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Nt,Bt.__webglTexture,nt,Rt)}}else if(v!==null&&nt!==0){let Rt=B.get(v.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Rt.__webglTexture,nt)}K=-1};function Ps(v){let F=B.get(v);return(F.__readFormat!==v.format||F.__readType!==v.type)&&(F.__readFormat=v.format,F.__readType=v.type,F.__formatReadable=R.textureFormatReadable(v.format),F.__typeReadable=R.textureTypeReadable(v.type)),F}this.readRenderTargetPixels=function(v,F,nt,$,Y,At,Dt,Rt=0){if(!(v&&v.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=B.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){_.bindFramebuffer(V.FRAMEBUFFER,Nt);try{let Bt=v.textures[Rt],re=Bt.format,oe=Bt.type;v.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Rt);let Ut=Ps(Bt);if(Ut.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-$&&nt>=0&&nt<=v.height-Y&&V.readPixels(F,nt,$,Y,Tt.convert(re),Tt.convert(oe),At)}finally{let Bt=rt!==null?B.get(rt).__webglFramebuffer:null;_.bindFramebuffer(V.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(v,F,nt,$,Y,At,Dt,Rt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=B.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt)if(F>=0&&F<=v.width-$&&nt>=0&&nt<=v.height-Y){_.bindFramebuffer(V.FRAMEBUFFER,Nt);let Bt=v.textures[Rt],re=Bt.format,oe=Bt.type;v.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Rt);let Ut=Ps(Bt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,fe),V.bufferData(V.PIXEL_PACK_BUFFER,At.byteLength,V.STREAM_READ),V.readPixels(F,nt,$,Y,Tt.convert(re),Tt.convert(oe),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Re=rt!==null?B.get(rt).__webglFramebuffer:null;_.bindFramebuffer(V.FRAMEBUFFER,Re);let S=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await fu(V,S,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,fe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,At),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(fe),V.deleteSync(S),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,nt=0){let $=Math.pow(2,-nt),Y=Math.floor(v.image.width*$),At=Math.floor(v.image.height*$),Dt=F!==null?F.x:0,Rt=F!==null?F.y:0;Q.setTexture2D(v,0),V.copyTexSubImage2D(V.TEXTURE_2D,nt,0,0,Dt,Rt,Y,At),_.unbindTexture()},this.copyTextureToTexture=function(v,F,nt=null,$=null,Y=0,At=0){let Dt,Rt,Nt,Bt,re,oe,Ut,fe,Re,S=v.isCompressedTexture?v.mipmaps[At]:v.image;if(nt!==null)Dt=nt.max.x-nt.min.x,Rt=nt.max.y-nt.min.y,Nt=nt.isBox3?nt.max.z-nt.min.z:1,Bt=nt.min.x,re=nt.min.y,oe=nt.isBox3?nt.min.z:0;else{let te=Math.pow(2,-Y);Dt=Math.floor(S.width*te),Rt=Math.floor(S.height*te),v.isDataArrayTexture?Nt=S.depth:v.isData3DTexture?Nt=Math.floor(S.depth*te):Nt=1,Bt=0,re=0,oe=0}$!==null?(Ut=$.x,fe=$.y,Re=$.z):(Ut=0,fe=0,Re=0);let P=Tt.convert(F.format),tt=Tt.convert(F.type),z;F.isData3DTexture?(Q.setTexture3D(F,0),z=V.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),z=V.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),z=V.TEXTURE_2D),_.activeTexture(V.TEXTURE0),_.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(V.UNPACK_ALIGNMENT,F.unpackAlignment);let et=_.getParameter(V.UNPACK_ROW_LENGTH),st=_.getParameter(V.UNPACK_IMAGE_HEIGHT),ft=_.getParameter(V.UNPACK_SKIP_PIXELS),yt=_.getParameter(V.UNPACK_SKIP_ROWS),Wt=_.getParameter(V.UNPACK_SKIP_IMAGES);_.pixelStorei(V.UNPACK_ROW_LENGTH,S.width),_.pixelStorei(V.UNPACK_IMAGE_HEIGHT,S.height),_.pixelStorei(V.UNPACK_SKIP_PIXELS,Bt),_.pixelStorei(V.UNPACK_SKIP_ROWS,re),_.pixelStorei(V.UNPACK_SKIP_IMAGES,oe);let Jt=v.isDataArrayTexture||v.isData3DTexture,kt=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){let te=B.get(v),ge=B.get(F),ie=B.get(te.__renderTarget),Oe=B.get(ge.__renderTarget);_.bindFramebuffer(V.READ_FRAMEBUFFER,ie.__webglFramebuffer),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let dn=0;dn<Nt;dn++)Jt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,B.get(v).__webglTexture,Y,oe+dn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,B.get(F).__webglTexture,At,Re+dn)),V.blitFramebuffer(Bt,re,Dt,Rt,Ut,fe,Dt,Rt,V.DEPTH_BUFFER_BIT,V.NEAREST);_.bindFramebuffer(V.READ_FRAMEBUFFER,null),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||v.isRenderTargetTexture||B.has(v)){let te=B.get(v),ge=B.get(F);_.bindFramebuffer(V.READ_FRAMEBUFFER,I),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,U);for(let ie=0;ie<Nt;ie++)Jt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,te.__webglTexture,Y,oe+ie):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,te.__webglTexture,Y),kt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ge.__webglTexture,At,Re+ie):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ge.__webglTexture,At),Y!==0?V.blitFramebuffer(Bt,re,Dt,Rt,Ut,fe,Dt,Rt,V.COLOR_BUFFER_BIT,V.NEAREST):kt?V.copyTexSubImage3D(z,At,Ut,fe,Re+ie,Bt,re,Dt,Rt):V.copyTexSubImage2D(z,At,Ut,fe,Bt,re,Dt,Rt);_.bindFramebuffer(V.READ_FRAMEBUFFER,null),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else kt?v.isDataTexture||v.isData3DTexture?V.texSubImage3D(z,At,Ut,fe,Re,Dt,Rt,Nt,P,tt,S.data):F.isCompressedArrayTexture?V.compressedTexSubImage3D(z,At,Ut,fe,Re,Dt,Rt,Nt,P,S.data):V.texSubImage3D(z,At,Ut,fe,Re,Dt,Rt,Nt,P,tt,S):v.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,At,Ut,fe,Dt,Rt,P,tt,S.data):v.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,At,Ut,fe,S.width,S.height,P,S.data):V.texSubImage2D(V.TEXTURE_2D,At,Ut,fe,Dt,Rt,P,tt,S);_.pixelStorei(V.UNPACK_ROW_LENGTH,et),_.pixelStorei(V.UNPACK_IMAGE_HEIGHT,st),_.pixelStorei(V.UNPACK_SKIP_PIXELS,ft),_.pixelStorei(V.UNPACK_SKIP_ROWS,yt),_.pixelStorei(V.UNPACK_SKIP_IMAGES,Wt),At===0&&F.generateMipmaps&&V.generateMipmap(z),_.unbindTexture()},this.initRenderTarget=function(v){B.get(v).__webglFramebuffer===void 0&&Q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Q.setTextureCube(v,0):v.isData3DTexture?Q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Q.setTexture2DArray(v,0):Q.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){J=0,H=0,rt=null,_.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var v_=["top","side","bottom"];function $u(i){let t=i&&i.blocks||[],e=i&&i.items||[],n=new Array(256).fill(null),s=Object.create(null),r=[];for(let A of t){if(!A||typeof A.id!="string")throw new Error("block without id");if(!Number.isInteger(A.n)||A.n<0||A.n>255)throw new Error("bad n for "+A.id);if(n[A.n])throw new Error("duplicate n "+A.n+" ("+A.id+")");if(s[A.id])throw new Error("duplicate id "+A.id);let M=A.colors||{},w=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},A);if(w.placeable=w.n!==0&&!w.liquid,w.colors={top:M.top||"#888888",side:M.side||M.top||"#888888",bottom:M.bottom||M.top||"#888888"},w.opaque=w.solid&&!w.transparent,w.tile={},w.n!==0){let E={};for(let L of v_){let y=w.colors[L]+"|"+(w.pattern==="grass"||w.pattern==="log"||w.pattern==="lamp"||w.pattern==="table"||w.pattern==="stele"||w.pattern==="torch"||w.pattern==="bed"||w.pattern==="snow"?L:"");E[y]===void 0&&(E[y]=r.length,r.push({block:w.id,face:L,color:w.colors[L],pattern:w.pattern,accent:w.accent||null,top:w.colors.top})),w.tile[L]=E[y]}}n[w.n]=w,s[w.id]=w}if(!s.air)throw new Error("registry needs air");for(let A of e){if(s[A.id])throw new Error("duplicate id "+A.id);s[A.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},A)}for(let A in s){let M=s[A].drops;if(M&&M!=="self"&&!s[M])throw new Error(A+" drops unknown "+M)}let a=A=>(typeof A=="number"?n[A]:s[A])||null,o=new Uint8Array(256),c=new Uint8Array(256),l=new Uint8Array(256),u=new Uint8Array(256),d=new Uint8Array(256),h=new Uint8Array(256),f=new Uint8Array(256),g=new Uint8Array(256),x=new Int16Array(256).fill(-1),m=new Int16Array(256).fill(-1),p=new Int16Array(256).fill(-1);n.forEach((A,M)=>{A&&(u[M]=A.solid?1:0,d[M]=A.opaque?1:0,h[M]=A.transparent?1:0,f[M]=A.emissive?1:0,g[M]=A.liquid?1:0,o[M]=A.light!=null?A.light:A.emissive?15:0,c[M]=A.liquid?2:0,l[M]=A.shape==="torch"?1:0,M&&(x[M]=A.tile.top,m[M]=A.tile.side,p[M]=A.tile.bottom))});let T=(i&&i.blueprints||[]).map(A=>Object.assign({kind:"blueprint"},A));return{blocks:n.filter(Boolean),items:e.map(A=>s[A.id]),blueprints:T,tiles:r,get:a,toolOf:A=>{let M=A&&s[A];return M&&M.kind==="item"&&M.tool&&typeof M.tool=="object"?M.tool:null},num:A=>{let M=s[A];if(!M||M.kind!=="block")throw new Error("no block "+A);return M.n},name:A=>{let M=a(A);return M?M.name_zh:String(A)},maxStack:A=>{let M=s[A];return M?M.maxStack:64},dropOf:A=>{let M=n[A];return!M||!M.drops?null:M.drops==="self"?M.id:M.drops},breakTime:A=>{let M=n[A];return!M||M.hardness<0?1/0:.25+M.hardness*.55},flat:{solid:u,opaque:d,trans:h,emit:f,liquid:g,tileTop:x,tileSide:m,tileBottom:p,lightEmit:o,attn:c,shape:l}}}var ei=i=>Math.floor(i/16);var ve=(i,t,e)=>(t*16+e)*16+i;var Bi=(i,t)=>i+","+t;function wc(i,t,e){if(i=Math.floor(i),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let n=ei(i),s=ei(e);return{cx:n,cz:s,i:ve(i-n*16,t,e-s*16)}}function Zu(i,t,e){let n=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let a=r*r+s*s;a<=e*e+e&&n.push({cx:i+r,cz:t+s,d2:a})}return n.sort((s,r)=>s.d2-r.d2)}function Rn(i,t,e,n){let s=(i|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(n|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var Lo=(i,t,e)=>Rn(i,t,0,e);function M_(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Ec=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],S_=.5*(Math.sqrt(3)-1),vr=(3-Math.sqrt(3))/6;function zi(i){let t=M_(i),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),a=e[s];e[s]=e[r],e[r]=a}let n=new Uint8Array(512);for(let s=0;s<512;s++)n[s]=e[s&255];return function(s,r){let a=(s+r)*S_,o=Math.floor(s+a),c=Math.floor(r+a),l=(o+c)*vr,u=s-(o-l),d=r-(c-l),h=u>d?1:0,f=1-h,g=u-h+vr,x=d-f+vr,m=u-1+2*vr,p=d-1+2*vr,T=o&255,A=c&255,M=0,w,E;return w=.5-u*u-d*d,w>0&&(E=Ec[n[T+n[A]]&7],w*=w,M+=w*w*(E[0]*u+E[1]*d)),w=.5-g*g-x*x,w>0&&(E=Ec[n[T+h+n[A+f]]&7],w*=w,M+=w*w*(E[0]*g+E[1]*x)),w=.5-m*m-p*p,w>0&&(E=Ec[n[T+1+n[A+1]]&7],w*=w,M+=w*w*(E[0]*m+E[1]*p)),70*M}}function ki(i,t,e,n){let s=1,r=1,a=0,o=0;for(let c=0;c<n;c++)a+=s*i(t*r,e*r),o+=s,s*=.5,r*=2;return a/o}function Tc(i){let t=e=>e*e*(3-2*e);return function(e,n,s){let r=Math.floor(e),a=Math.floor(n),o=Math.floor(s),c=t(e-r),l=t(n-a),u=t(s-o),d=(f,g,x)=>Rn(i,r+f,a+g,o+x),h=(f,g,x)=>f+(g-f)*x;return h(h(h(d(0,0,0),d(1,0,0),c),h(d(0,1,0),d(1,1,0),c),l),h(h(d(0,0,1),d(1,0,1),c),h(d(0,1,1),d(1,1,1),c),l),u)}}var ws=160,In=18,Ac=[[0,1],[-1,0],[0,-1],[1,0]];function Ju(i,t,e,n,s){return s===1?[n-1-t,i]:s===2?[e-1-i,n-1-t]:s===3?[t,e-1-i]:[i,t]}var b_=(i,t,e)=>e&1?[t,i]:[i,t];function Ku(i,t,e){let n=new Map,s=t.SEA,r=e&&e.templates||{};function a(c,l){let u=c+","+l;if(n.has(u))return n.get(u);let d=null,h=f=>Rn(i+909,c,f,l);if(h(0)<.45&&e&&e.houses&&e.houses.length){let f=Math.floor((c+.2+h(1)*.6)*ws),g=Math.floor((l+.2+h(2)*.6)*ws),x=t.biomeOf(f,g),m=t.height(f,g),p=(x==="plains"||x==="desert")&&Math.hypot(f,g)>110;if(p&&m>s+1)for(let T=0;T<16&&p;T++)for(let A of[7,14]){let M=t.height(f+Math.round(Math.cos(T*.39)*A),g+Math.round(Math.sin(T*.39)*A));(Math.abs(M-m)>3||M<=s)&&(p=!1)}else p=!1;if(p){let T=[],A=[],M=3+Math.floor(h(3)*4),w=(E,L,y,C)=>{let D=r[E];if(!D)return null;let[G,N]=b_(D.size[0],D.size[2],C),O={tpl:E,rot:C,x0:L-(G>>1),z0:y-(N>>1),y:m,w:G,d:N,h:D.size[1]};return T.push(O),O};w("well",f,g,0),w("lamp_post",f+3,g+3,0),w("lamp_post",f-3,g-3,0);for(let E=0;E<M;E++){let L=E/M*Math.PI*2+h(10+E)*.5,y=9+h(20+E)*3,C=f+Math.round(Math.cos(L)*y),D=g+Math.round(Math.sin(L)*y),G=f-C,N=g-D,O=0,I=-1/0;Ac.forEach((at,pt)=>{let ht=at[0]*G+at[1]*N;ht>I&&(I=ht,O=pt)});let U=e.houses[Math.floor(h(30+E)*e.houses.length)],J=w(U,C,D,O);if(!J)continue;let H=r[U],[rt,K]=Ju(H.door[0],H.door[1],H.size[0],H.size[2],O),j={x:J.x0+rt+Ac[O][0],z:J.z0+K+Ac[O][1]};A.push({ax:f,az:g,bx:j.x,bz:j.z})}d={id:u,x:f,z:g,y:m,biome:x,structures:T,paths:A,villagers:2+Math.floor(h(4)*3)}}}return n.set(u,d),d}function o(c,l,u,d){let h=[];for(let f=Math.floor((l-In)/ws);f<=Math.floor((d+In)/ws);f++)for(let g=Math.floor((c-In)/ws);g<=Math.floor((u+In)/ws);g++){let x=a(g,f);x&&x.x+In>=c&&x.x-In<=u&&x.z+In>=l&&x.z-In<=d&&h.push(x)}return h}return{plan:a,around:o,chunk:(c,l)=>o(c*16,l*16,c*16+16-1,l*16+16-1)}}function ju(i,t,e,n,s,r,a){let o=t*16,c=e*16,l=(g,x)=>g>=o&&g<o+16&&x>=c&&x<c+16,u=n.biome==="desert",d=u?s.desert||{}:{},h=g=>{let x=s.palette[g];if(!x)return null;let m=d[x]||x;return r.byId(m)},f=u?r.byId("sandstone"):r.byId("cobblestone");for(let g of n.paths){let x=Math.max(Math.abs(g.bx-g.ax),Math.abs(g.bz-g.az));for(let m=0;m<=x;m++){let p=Math.round(g.ax+(g.bx-g.ax)*m/x),T=Math.round(g.az+(g.bz-g.az)*m/x);if(!l(p,T))continue;let A=a.height(p,T),M=ve(p-o,A,T-c);i[M]&&i[M]!==r.water&&(i[M]=r.path);for(let w=A+1;w<Math.min(64,A+4);w++){let E=ve(p-o,w,T-c);(i[E]===r.leaves||i[E]===r.log)&&(i[E]=0)}}}for(let g of n.structures){let x=s.templates[g.tpl];if(!x)continue;let[m,,p]=x.size;for(let T=0;T<p;T++)for(let A=0;A<m;A++){let[M,w]=Ju(A,T,m,p,g.rot),E=g.x0+M,L=g.z0+w;if(!l(E,L))continue;let y=E-o,C=L-c;for(let D=g.y-1;D>Math.max(0,g.y-8);D--){let G=ve(y,D,C);if(i[G]&&i[G]!==r.water)break;i[G]=f}for(let D=g.y+x.size[1];D<Math.min(64,g.y+x.size[1]+3);D++)i[ve(y,D,C)]=0;x.layers.forEach((D,G)=>{let N=(D[T]||"")[A];if(!N||N===" ")return;let O=g.y+G;O>=64||(i[ve(y,O,C)]=N==="."?0:h(N)||0)})}}}var un=24;var td={ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},Qu=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3}],Es=112;function ed(i,t,e){let n=N=>t.num(N),s=N=>{try{return n(N)}catch{return 0}},r={air:0,grass:n("grass"),dirt:n("dirt"),stone:n("stone"),sand:n("sand"),water:n("water"),log:n("log"),leaves:n("leaves"),coal:n("coal_ore"),iron:n("iron_ore"),ruby:n("ruby_ore"),gold:n("gold_ore"),diamond:n("diamond_ore"),bedrock:n("bedrock"),stele:n("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s;let a=zi(i),o=zi(i+101),c=zi(i+202),l=zi(i+303),u=zi(i+404),d=Tc(i+505),h=Tc(i+606);function f(N,O){let I=ki(a,N/190,O/190,3),U=ki(o,N/55,O/55,4),J=Math.max(0,ki(c,N/130,O/130,2)-.1),H=27+I*9+U*6+J*J*75;return Math.max(4,Math.min(54,Math.floor(H)))}let g=zi(i+808);function x(N,O){let I=f(N,O),U=ki(g,N/900,O/900,2),J=Math.min(1,Math.max(0,(Math.hypot(N,O)-240)/80)),H=Math.min(1,Math.max(0,(-.18-U)/.17)),rt=H*H*(3-2*H)*J;return rt>0&&(I=Math.round(I*(1-rt)+(un-14)*rt)),I<un-1?Math.max(3,Math.floor(un-1-(un-1-I)*1.8)):I}function m(N,O){let I=(Lo(i+3,N,O)-.5)*.025;return{t:ki(l,N/420,O/420,2)+I,u:ki(u,N/380,O/380,2)-I}}function p(N,O,I=x(N,O)){if(I<un-1)return"ocean";let{t:U,u:J}=m(N,O);return U<-.3?"snow":U>.28&&J<.05?"desert":J>.12?"forest":"plains"}let T=null;function A(){if(T)return T;let N=(O,I)=>{let U=x(O,I);return U>=un+2&&Math.abs(x(O+1,I)-U)<2&&Math.abs(x(O,I+1)-U)<2};for(let O=0;O<400;O+=2)for(let I=0;I<Math.max(1,O*2);I++){let U=I/Math.max(1,O*2)*Math.PI*2,J=Math.round(Math.cos(U)*O),H=Math.round(Math.sin(U)*O);if(N(J,H)&&N(J+3,H+2))return T={x:J+.5,y:x(J,H)+1,z:H+.5,stele:{x:J+3,y:x(J+3,H+2)+1,z:H+2},portal:{x:J-3,y:Math.max(un+1,x(J-3,H+2))+1,z:H+2}},T}return T={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},T}function M(N,O){let I=[],U=N*16,J=O*16,H=Math.floor((U-80)/Es),rt=Math.floor((U+16+80)/Es),K=Math.floor((J-80)/Es),j=Math.floor((J+16+80)/Es);for(let at=K;at<=j;at++)for(let pt=H;pt<=rt;pt++){let ht=it=>Rn(i+707,pt,it,at);if(ht(0)>.25)continue;let vt=(pt+ht(1))*Es,dt=(at+ht(2))*Es,Pt=ht(3)*Math.PI,Z=40+ht(4)*30;I.push({ax:vt-Math.cos(Pt)*Z/2,az:dt-Math.sin(Pt)*Z/2,dx:Math.cos(Pt)*Z,dz:Math.sin(Pt)*Z,len:Z,floor:7+Math.floor(ht(5)*6),w:1.6+ht(6)*1.2})}return I}function w(N,O){let I=new Uint8Array(16384),U=N*16,J=O*16,H=18,rt=new Int16Array(H*H);for(let vt=-1;vt<=16;vt++)for(let dt=-1;dt<=16;dt++)rt[(vt+1)*H+dt+1]=x(U+dt,J+vt);let K=A(),j=new Array(256);for(let vt=0;vt<16;vt++)for(let dt=0;dt<16;dt++){let Pt=U+dt,Z=J+vt,it=rt[(vt+1)*H+dt+1],xt=Math.max(Math.abs(rt[(vt+1)*H+dt]-it),Math.abs(rt[(vt+1)*H+dt+2]-it),Math.abs(rt[vt*H+dt+1]-it),Math.abs(rt[(vt+2)*H+dt+1]-it))>=3,Mt=j[vt*16+dt]=p(Pt,Z,it),mt=it<=un+1,Lt,ne;Mt==="ocean"||mt||Mt==="desert"?(Lt=r.sand,ne=r.sand):xt?(Lt=r.stone,ne=r.stone):Mt==="snow"?(Lt=r.snow,ne=r.dirt):(Lt=r.grass,ne=r.dirt);for(let Ot=0;Ot<=it;Ot++){let qt;if(Ot===0?qt=r.bedrock:Ot===it?qt=Lt:Ot>=it-3?qt=ne:Mt==="desert"&&Ot>=it-7?qt=r.sandstone:qt=r.stone,qt===r.stone&&xt&&Ot>=it-4){let $t=Rn(i,Pt,Ot,Z);$t<.06?qt=r.coal:$t<.09?qt=r.iron:$t<.096&&(qt=r.ruby)}I[ve(dt,Ot,vt)]=qt}for(let Ot=it+1;Ot<=un;Ot++)I[ve(dt,Ot,vt)]=Ot===un&&Mt==="snow"?r.ice:r.water}E(I,N,O,rt,H);for(let vt=0;vt<Qu.length;vt++){let dt=Qu[vt],Pt=r[dt.ore];for(let Z=0;Z<dt.count;Z++){let it=Lt=>Rn(i+31*vt+Lt,N*977+Z,Lt,O*131+Z);if(it(9)>dt.chance)continue;let xt=Math.floor(it(1)*16),Mt=dt.y0+Math.floor(it(2)*(dt.y1-dt.y0)),mt=Math.floor(it(3)*16);for(let Lt=0;Lt<dt.size;Lt++){xt>=0&&xt<16&&mt>=0&&mt<16&&Mt>0&&Mt<64&&I[ve(xt,Mt,mt)]===r.stone&&(I[ve(xt,Mt,mt)]=Pt);let ne=Math.floor(it(10+Lt)*6);ne===0?xt++:ne===1?xt--:ne===2?Mt++:ne===3?Mt--:ne===4?mt++:mt--}}}let at=e?G.chunk(N,O):[];L(I,N,O,rt,H,j,K,at);for(let vt of at)ju(I,N,O,vt,e,r,D);let pt=K.stele;if(Math.floor(pt.x/16)===N&&Math.floor(pt.z/16)===O){let vt=pt.x-U,dt=pt.z-J;I[ve(vt,pt.y,dt)]=r.stele,I[ve(vt,pt.y+1,dt)]=r.stele}let ht=K.portal;if(r.portal&&ht&&Math.floor(ht.x/16)===N&&Math.floor(ht.z/16)===O){let vt=ht.x-U,dt=ht.z-J;for(let Pt=Math.max(1,ht.y-3);Pt<ht.y;Pt++)(!I[ve(vt,Pt,dt)]||I[ve(vt,Pt,dt)]===r.water)&&(I[ve(vt,Pt,dt)]=r.stone);I[ve(vt,ht.y,dt)]=r.portal,I[ve(vt,ht.y+1,dt)]=r.portal}return I}function E(N,O,I,U,J){let H=O*16,rt=I*16,K=4,j=16/K+1,at=64/K+1,pt=new Float32Array(j*j*at);for(let dt=0;dt<at;dt++)for(let Pt=0;Pt<j;Pt++)for(let Z=0;Z<j;Z++){let it=H+Z*K,xt=dt*K,Mt=rt+Pt*K,mt=d(it/22,xt/14,Mt/22)-.5,Lt=h(it/22,xt/14,Mt/22)-.5;pt[(dt*j+Pt)*j+Z]=mt*mt+Lt*Lt}let ht=(dt,Pt,Z)=>pt[(Pt*j+Z)*j+dt],vt=M(O,I);for(let dt=0;dt<16;dt++)for(let Pt=0;Pt<16;Pt++){let Z=U[(dt+1)*J+Pt+1],it=Z<=un+1,xt=it?Z-5:Z,Mt=Pt>>2,mt=dt>>2,Lt=(Pt&3)/K,ne=(dt&3)/K;for(let $t=3;$t<=xt;$t++){let Xt=$t>>2,ue=($t&3)/K,be=ht(Mt,Xt,mt)+(ht(Mt+1,Xt,mt)-ht(Mt,Xt,mt))*Lt,Ee=ht(Mt,Xt,mt+1)+(ht(Mt+1,Xt,mt+1)-ht(Mt,Xt,mt+1))*Lt,pe=ht(Mt,Xt+1,mt)+(ht(Mt+1,Xt+1,mt)-ht(Mt,Xt+1,mt))*Lt,xe=ht(Mt,Xt+1,mt+1)+(ht(Mt+1,Xt+1,mt+1)-ht(Mt,Xt+1,mt+1))*Lt;if((be+(Ee-be)*ne)*(1-ue)+(pe+(xe-pe)*ne)*ue<.008){let Ce=ve(Pt,$t,dt);N[Ce]!==r.bedrock&&N[Ce]!==r.water&&(N[Ce]=0)}}if(!vt.length||it)continue;let Ot=H+Pt,qt=rt+dt;for(let $t of vt){let Xt=Math.max(0,Math.min(1,((Ot-$t.ax)*$t.dx+(qt-$t.az)*$t.dz)/($t.len*$t.len))),ue=$t.ax+$t.dx*Xt,be=$t.az+$t.dz*Xt,Ee=Math.hypot(Ot-ue,qt-be),pe=$t.w*Math.sin(Math.PI*Xt);if(Ee<pe)for(let xe=$t.floor+Math.floor(Ee*2);xe<=Z;xe++){let V=ve(Pt,xe,dt);N[V]!==r.water&&(N[V]=0)}}}}function L(N,O,I,U,J,H,rt,K){let j=O*16,at=I*16;for(let pt=2;pt<14;pt++)for(let ht=2;ht<14;ht++){let vt=j+ht,dt=at+pt,Pt=U[(pt+1)*J+ht+1],Z=H[pt*16+ht],it=N[ve(ht,Pt,pt)];if(Math.abs(vt-rt.x)<7&&Math.abs(dt-rt.z)<7||K.some(Lt=>Math.abs(vt-Lt.x)<In+2&&Math.abs(dt-Lt.z)<In+2))continue;let xt=Lo(i+7,vt,dt),Mt=Lo(i+9,vt,dt);if(Z==="desert"&&it===r.sand&&Pt>un+1&&xt<.008&&r.cactus){let Lt=1+Math.floor(Mt*3);for(let ne=Pt+1;ne<=Pt+Lt&&ne<64;ne++)N[ve(ht,ne,pt)]=r.cactus;continue}if(Z==="snow"&&it===r.snow&&xt<.02){C(N,ht,pt,Pt,5+Math.floor(Mt*3));continue}let mt=Z==="forest"?.035:Z==="plains"?.003:0;it===r.grass&&xt<mt&&y(N,ht,pt,Pt,vt,dt,4+Math.floor(Mt*2))}}function y(N,O,I,U,J,H,rt){let K=U+rt;if(!(K+2>=64)){for(let j=K-2;j<=K+1;j++){let at=j>=K?1:2;for(let pt=-at;pt<=at;pt++)for(let ht=-at;ht<=at;ht++){if(at===2&&Math.abs(ht)===2&&Math.abs(pt)===2&&Rn(i,J+ht,j,H+pt)<.6)continue;let vt=ve(O+ht,j,I+pt);N[vt]===r.air&&(N[vt]=r.leaves)}}N[ve(O,U,I)]=r.dirt;for(let j=U+1;j<=K;j++)N[ve(O,j,I)]=r.log}}function C(N,O,I,U,J){let H=U+J;if(!(H+2>=64)){for(let rt=U+2;rt<=H+1;rt++){let K=H+1-rt,j=K>=4?2:K>=1?1:0;for(let at=-j;at<=j;at++)for(let pt=-j;pt<=j;pt++){if(j===2&&Math.abs(pt)+Math.abs(at)>3)continue;let ht=ve(O+pt,rt,I+at);N[ht]===r.air&&(N[ht]=r.sleaves)}}N[ve(O,U,I)]=r.dirt;for(let rt=U+1;rt<=H;rt++)N[ve(O,rt,I)]=r.slog}}let D={height:x,baseHeight:f,biomeOf:p,climate:m,genChunk:w,findSpawn:A,SEA:un},G=Ku(i,D,e);return D.villages=G,D}function Mi(i,t,e,n,s,r){let a=n/2,o=Math.floor(i-a),c=Math.floor(i+a-1e-6),l=Math.floor(t),u=Math.floor(t+s-1e-6),d=Math.floor(e-a),h=Math.floor(e+a-1e-6);for(let f=l;f<=u;f++)for(let g=d;g<=h;g++)for(let x=o;x<=c;x++)if(r(x,f,g))return!0;return!1}function Do(i,t,e,n,s={}){let r=s.w||.6,a=s.h||1.8,o=!!s.canStep,c=!1,l=0,u=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,d=Math.max(1,Math.ceil(u/.35)),h=e/d;for(let f=0;f<d;f++){let g=i.y+t.y*h;Mi(i.x,g,i.z,r,a,n)&&(t.y<0?(g=Math.floor(g)+1,c=!0,Mi(i.x,g,i.z,r,a,n)&&(g=i.y)):(g=Math.min(i.y,Math.ceil(g+a)-1-a),Mi(i.x,g,i.z,r,a,n)&&(g=i.y)),t.y=0),i.y=g;for(let x of["x","z"]){let m=t[x]*h;if(!m)continue;let p={x:i.x,y:i.y,z:i.z};if(p[x]+=m,!Mi(p.x,p.y,p.z,r,a,n)){i[x]=p[x];continue}if(o&&(c||s.grounded)){let A=Math.floor(i.y+.01)+1;if(A-i.y<=1.01&&!Mi(p.x,A,p.z,r,a,n)&&!Mi(i.x,A,i.z,r,a,n)){l+=A-i.y,i.y=A,i[x]=p[x];continue}}let T=r/2;i[x]=m>0?Math.floor(p[x]+T)-T-1e-4:Math.floor(p[x]-T)+1+T+1e-4,Mi(i.x,i.y,i.z,r,a,n)&&(i[x]=p[x]-m),t[x]=0}}return!c&&t.y<=0&&Mi(i.x,i.y-.02,i.z,r,a,n)&&(c=!0),{onGround:c,stepped:l}}function No(i,t,e,n,s){let r=Math.floor(i.x),a=Math.floor(i.y),o=Math.floor(i.z),c=Math.sign(t.x),l=Math.sign(t.y),u=Math.sign(t.z),d=c?Math.abs(1/t.x):1/0,h=l?Math.abs(1/t.y):1/0,f=u?Math.abs(1/t.z):1/0,g=c?(c>0?r+1-i.x:i.x-r)*d:1/0,x=l?(l>0?a+1-i.y:i.y-a)*h:1/0,m=u?(u>0?o+1-i.z:i.z-o)*f:1/0,p=[0,0,0],T=0;for(;T<=e;){let A=n(r,a,o);if(A&&s(A))return{x:r,y:a,z:o,n:A,face:p,dist:T};g<x&&g<m?(r+=c,T=g,g+=d,p=[-c,0,0]):x<m?(a+=l,T=x,x+=h,p=[0,-l,0]):(o+=u,T=m,m+=f,p=[0,0,-u])}return null}var Nc={};jo(Nc,{HOTBAR:()=>Rc,SIZE:()=>Cc,add:()=>nn,canAdd:()=>Sr,count:()=>Pn,craft:()=>Dc,craftable:()=>Oo,createInventory:()=>Uo,deserialize:()=>Lc,moveSlot:()=>Pc,remove:()=>Mr,serialize:()=>Fo,takeFromSlot:()=>Ic});var Cc=36,Rc=9;function Uo(i=36){return{slots:new Array(i).fill(null)}}function nn(i,t,e,n=()=>64){let s=n(t);for(let r=0;r<i.slots.length&&e>0;r++){let a=i.slots[r];if(a&&a.id===t&&a.count<s){let o=Math.min(e,s-a.count);a.count+=o,e-=o}}for(let r=0;r<i.slots.length&&e>0;r++)if(!i.slots[r]){let a=Math.min(e,s);i.slots[r]={id:t,count:a},e-=a}return e}function Pn(i,t){return i.slots.reduce((e,n)=>e+(n&&n.id===t?n.count:0),0)}function Mr(i,t,e){if(Pn(i,t)<e)return!1;for(let n=i.slots.length-1;n>=0&&e>0;n--){let s=i.slots[n];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(i.slots[n]=null)}}return!0}function Ic(i,t,e=1){let n=i.slots[t];if(!n||n.count<e)return null;n.count-=e;let s=n.id;return n.count||(i.slots[t]=null),s}function Pc(i,t,e,n=()=>64){if(t===e)return;let s=i.slots[t],r=i.slots[e];if(s&&r&&s.id===r.id){let a=Math.min(s.count,n(s.id)-r.count);r.count+=a,s.count-=a,s.count||(i.slots[t]=null);return}i.slots[t]=r,i.slots[e]=s}function Sr(i,t,e,n=()=>64){let s={slots:i.slots.map(r=>r&&{...r})};return nn(s,t,e,n)===0}var Fo=i=>i.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function Lc(i,t=36){let e=Uo(t);return(i||[]).slice(0,t).forEach((n,s)=>{Array.isArray(n)&&typeof n[0]=="string"&&n[1]>0&&(e.slots[s]={id:n[0],count:n[1]|0},Number.isFinite(n[2])&&(e.slots[s].dur=n[2]))}),e}function Oo(i,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let n in t.in)if(Pn(i,n)<t.in[n])return{ok:!1,reason:"materials"};return{ok:!0}}function Dc(i,t,e=()=>64,n){let s=Oo(i,t,n||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=i.slots.map(a=>a&&{...a});for(let a in t.in)Mr(i,a,t.in[a]);return nn(i,t.out.id,t.out.count,e)>0?(i.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function E_(i=0){return{coins:i|0,earned:0,spent:0,owned:[]}}var Ts=(i,t)=>i.owned.includes(t),nd=(i,t)=>i?t?2:1:0;function Vi(i,t){return t=Math.max(0,t|0),i.coins+=t,i.earned+=t,i.coins}function br(i,t){return t=Math.max(0,t|0),i.coins<t?!1:(i.coins-=t,i.spent+=t,!0)}function id(i){return i.blocks.concat(i.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((i.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function sd(i,t,e,n=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&Ts(i,e.id)?{ok:!1,reason:"owned"}:i.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(br(i,e.price),i.owned.push(e.id),{ok:!0}):Sr(t,e.id,e.qty,n)?(br(i,e.price),nn(t,e.id,e.qty,n),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var rd=i=>({coins:i.coins,earned:i.earned,spent:i.spent,owned:i.owned.slice()});function ad(i){let t=E_(i&&i.coins);return i&&(t.earned=i.earned|0,t.spent=i.spent|0,t.owned=Array.isArray(i.owned)?i.owned.slice():[]),t}function A_(){return new Map}function od(i,t,e,n){let s=i.get(t);s||(s=new Map,i.set(t,s)),s.set(e,n)}function Uc(i){let t=new Array(i.size*2),e=0;for(let[n,s]of i)t[e++]=n,t[e++]=s;return t}function C_(i){let t=new Map;for(let e=0;e+1<(i||[]).length;e+=2)t.set(i[e]|0,i[e+1]|0);return t}function ld(i){let t=A_();for(let e in i||{})t.set(e,C_(i[e]));return t}var Bo=16;var jM=18;var ni=32;function cd(i){let t=i>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ln=i=>[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],Qt=(i,t=1,e=1)=>`rgba(${Math.round(Math.min(255,i[0]*t))},${Math.round(Math.min(255,i[1]*t))},${Math.round(Math.min(255,i[2]*t))},${e})`;function R_(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0}function Se(i,t){i.beginPath(),i.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)i.lineTo(t[e][0],t[e][1]);i.closePath(),i.fill()}function Si(i,t,e,n,s){let r=3+Math.floor(t()*2),a=[];for(let o=0;o<r;o++){let c=o/r*Math.PI*2+t()*.8;a.push([e+Math.cos(c)*s*(.6+t()*.5),n+Math.sin(c)*s*(.6+t()*.5)])}Se(i,a)}function I_(i,t){let e=Ln(t.color),n=cd(R_(t.block+t.face)),s=ni,r=1;t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),i.fillStyle=Qt(e,1,r),i.fillRect(0,0,s,s);let a=t.pattern,o=t.accent?Ln(t.accent):null;if(a==="grass"&&t.face==="top"){i.fillStyle=Qt(e,1.12);for(let d=0;d<4;d++)Si(i,n,n()*s,n()*s,5+n()*4)}if(a==="snow"&&t.face==="top"){i.fillStyle=Qt(e,.96);for(let d=0;d<4;d++)Si(i,n,n()*s,n()*s,4+n()*4)}if((a==="grass"||a==="snow")&&t.face==="side"){let d=Ln(t.top);i.fillStyle=Qt(d);let h=[[0,0],[s,0]];for(let f=s;f>=0;f-=4)h.push([f,8+Math.round(n()*5)]);Se(i,h)}if(a==="stone"||a==="bedrock")for(let d=0;d<5;d++)i.fillStyle=Qt(e,n()<.5?.9:1.08),Si(i,n,n()*s,n()*s,4+n()*6);if(a==="ore"){for(let d=0;d<4;d++)i.fillStyle=Qt(e,.92),Si(i,n,n()*s,n()*s,5);i.fillStyle=Qt(o);for(let d=0;d<5;d++)Si(i,n,5+n()*(s-10),5+n()*(s-10),2.5+n()*2.5)}if(a==="sand")for(let d=0;d<26;d++)i.fillStyle=Qt(e,n()<.5?.92:1.05),i.fillRect(Math.floor(n()*s),Math.floor(n()*s),2,2);if(a==="log"&&t.face==="side")for(let d=3;d<s;d+=7)i.fillStyle=Qt(e,.82),i.fillRect(d,0,2,s);if(a==="log"&&t.face!=="side"&&(i.fillStyle=Qt(e,.85),i.fillRect(6,6,s-12,s-12),i.fillStyle=Qt(e,1.05),i.fillRect(11,11,s-22,s-22)),a==="leaves")for(let d=0;d<9;d++)i.fillStyle=Qt(e,n()<.5?.78:1.15),Si(i,n,n()*s,n()*s,3+n()*4);if(a==="planks"||a==="table"&&t.face==="bottom"){for(let d=7;d<s;d+=8)i.fillStyle=Qt(e,.78),i.fillRect(0,d,s,1);i.fillStyle=Qt(e,.85),i.fillRect(12,0,1,7),i.fillRect(22,8,1,7),i.fillRect(6,16,1,7),i.fillRect(18,24,1,8)}if(a==="table"&&t.face==="top"&&(i.fillStyle=Qt(e,.8),i.fillRect(s/2-1,3,2,s-6),i.fillRect(3,s/2-1,s-6,2)),a==="table"&&t.face==="side"&&(i.fillStyle=Qt(e,.7),i.fillRect(6,10,7,14),i.fillStyle=Qt([185,182,174]),Se(i,[[18,10],[27,12],[25,15],[19,14]]),i.fillStyle=Qt(e,.6),i.fillRect(21,14,2,10)),a==="glass"&&(i.fillStyle="rgba(255,255,255,0.45)",Se(i,[[6,24],[9,24],[24,9],[24,6]])),a==="water"){i.fillStyle=Qt(e,1.18,.72);for(let d=6;d<s;d+=10)i.fillRect(4+Math.floor(n()*10),d,10,2)}if(a==="gold"&&(i.fillStyle=Qt(e,1.15),Se(i,[[0,0],[s,0],[0,s]]),i.fillStyle=Qt(e,.9),Se(i,[[s,s],[s,8],[8,s]])),a==="lamp"&&(t.face==="side"?(i.fillStyle=Qt(Ln("#F3E3B5")),i.fillRect(7,6,s-14,s-12),i.fillStyle=Qt(e,.85),i.fillRect(0,0,s,3),i.fillRect(0,s-3,s,3)):t.face==="top"&&(i.fillStyle=Qt(e,1.05),i.fillRect(8,8,s-16,s-16))),a==="torch"&&(i.clearRect(0,0,s,s),t.face==="side"?(i.fillStyle=Qt(Ln("#8C6640")),i.fillRect(13,0,6,s),i.fillStyle=Qt(Ln("#F2C46B")),i.fillRect(13,0,6,8),i.fillStyle=Qt(o),i.fillRect(14,0,4,4)):(i.fillStyle=Qt(Ln(t.face==="top"?"#F2C46B":"#8C6640")),i.fillRect(12,12,8,8))),a==="bed"&&(t.face==="top"?(i.fillStyle=Qt(o),i.fillRect(0,0,s,10),i.fillStyle=Qt(e,.85),i.fillRect(0,10,s,3)):t.face==="side"&&(i.fillStyle=Qt(Ln("#E0352B")),i.fillRect(0,0,s,14),i.fillStyle=Qt(o),i.fillRect(0,0,9,14))),a==="wool")for(let d=0;d<7;d++)i.fillStyle=Qt(e,n()<.5?.94:1.04),Si(i,n,n()*s,n()*s,4+n()*4);if(a==="portal"&&(i.fillStyle=Qt(o),i.fillRect(5,5,s-10,s-10),i.fillStyle=Qt(o,1.3),Se(i,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),i.fillStyle=Qt(Ln("#EFEBDD"),1,.8),Se(i,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),i.fillStyle=Qt(o),i.fillRect(s/2-3,s/2-3,6,6)),a==="sandstone")for(let d=8;d<s;d+=9)i.fillStyle=Qt(e,.9),i.fillRect(0,d,s,2);if(a==="cactus")if(t.face==="side"){for(let d=4;d<s;d+=8)i.fillStyle=Qt(e,.82),i.fillRect(d,0,2,s);i.fillStyle=Qt(Ln("#EFEBDD"),1,.7);for(let d=0;d<6;d++)i.fillRect(Math.floor(n()*s),Math.floor(n()*s),2,2)}else i.fillStyle=Qt(e,.85),i.fillRect(6,6,s-12,s-12);if(a==="ice"&&(i.fillStyle="rgba(255,255,255,0.4)",Se(i,[[4,22],[8,22],[22,6],[18,6]])),a==="furnace"){for(let d=0;d<4;d++)i.fillStyle=Qt(e,n()<.5?.9:1.08),Si(i,n,n()*s,n()*s,4+n()*5);t.face==="side"?(i.fillStyle=Qt(o),i.fillRect(8,15,s-16,11),i.fillStyle=Qt(Ln("#E0352B"),1,.85),Se(i,[[11,26],[s/2,18],[s-11,26]])):(i.fillStyle=Qt(e,.8),i.fillRect(9,9,s-18,s-18))}a==="stele"&&t.face==="side"&&(i.fillStyle=Qt(e,1.12),i.fillRect(5,4,s-10,s-8),i.fillStyle=Qt(o),Se(i,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let c=i.getImageData(0,0,s,s),l=c.data;for(let d=0;d<l.length;d+=4){let h=1+(n()-.5)*.09;l[d]=Math.min(255,l[d]*h),l[d+1]=Math.min(255,l[d+1]*h),l[d+2]=Math.min(255,l[d+2]*h)}i.putImageData(c,0,0);let u=a==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";i.fillStyle=u,i.fillRect(0,0,s,2),i.fillRect(0,s-2,s,2),i.fillRect(0,2,2,s-4),i.fillRect(s-2,2,2,s-4),a!=="glass"&&a!=="water"&&(i.fillStyle="rgba(20,24,20,0.06)",i.fillRect(2,2,s-4,2),i.fillRect(2,s-4,s-4,2))}function hd(i){let t=document.createElement("canvas");t.width=t.height=ni*Bo;let e=t.getContext("2d",{willReadFrequently:!0}),n=[];return i.tiles.forEach((s,r)=>{let a=document.createElement("canvas");a.width=a.height=ni;let o=a.getContext("2d",{willReadFrequently:!0});I_(o,s),e.drawImage(a,r%Bo*ni,Math.floor(r/Bo)*ni),n[r]=a}),{canvas:t,tileCanvas:n}}function ud(i,t){let e={};for(let n of i.blocks){if(!n.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(n.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",Se(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",Se(r,[[21,16],[24,9],[27,16]]),e[n.id]=s.toDataURL();continue}let a=t.tileCanvas,o=1/ni,c=(l,u,d,h,f,g,x,m)=>{r.setTransform(u*o,d*o,h*o,f*o,g,x),r.drawImage(a[l],0,0),m&&(r.fillStyle=`rgba(20,24,20,${m})`,r.fillRect(0,0,ni,ni))};c(n.tile.top,20,10,-20,10,24,4,0),c(n.tile.side,20,10,0,22,4,14,.12),c(n.tile.side,20,-10,0,22,24,24,.26),e[n.id]=s.toDataURL()}for(let n of i.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),a=n.icon,o=n.color,c="#8C6640";r.save(),r.translate(24,24),a==="lump"?(r.fillStyle=o,Se(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",Se(r,[[-8,-12],[6,-14],[2,-4]])):a==="ingot"?(r.fillStyle=o,Se(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",Se(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4)):a==="hide"?(r.fillStyle=o,Se(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",Se(r,[[-6,-4],[6,-6],[4,6],[-5,5]])):a==="feather"?(r.rotate(-Math.PI/4),r.fillStyle=o,Se(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32)):a==="gem"?(r.fillStyle=o,Se(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",Se(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=a==="stick"?o:c,r.fillRect(-3,-14,6,32),r.fillStyle=o,a==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),a==="axe"&&Se(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),a==="shovel"&&Se(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),a==="sword"&&(r.fillRect(-4,-24,8,30),Se(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=c,r.fillRect(-9,6,18,4))),r.restore(),e[n.id]=s.toDataURL()}for(let n of i.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",Se(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let a=0;a<4;a++)r.fillRect(12,14+a*7,24,2);r.fillStyle=n.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",Se(r,[[28,26],[36,30],[30,38],[24,32]]),e[n.id]=s.toDataURL()}return e}function dd(){let i=cd(99),t=[],e=[];for(let n=0;n<4;n++){let s=document.createElement("canvas");s.width=s.height=ni;let r=s.getContext("2d");n&&r.drawImage(e[n-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let a=0;a<3+n*2;a++){let o=6+i()*20,c=6+i()*20,l=i()*Math.PI;Se(r,[[o,c],[o+Math.cos(l)*9,c+Math.sin(l)*9],[o+Math.cos(l+.3)*6,c+Math.sin(l+.3)*6]])}e.push(s),t.push(s)}return t}var fd=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,pd=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function P_(i,t){let e=ei(i),n=ei(t),s=[[e,n]];for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){if(!a&&!r)continue;let o=(e+a)*16,c=(n+r)*16,l=i<o?o-i:i>=o+16?i-(o+16-1):0,u=t<c?c-t:t>=c+16?t-(c+16-1):0;Math.max(l,u)<=14&&s.push([e+a,n+r])}return s}function gd(i){let t=new Vn(i);t.magFilter=De,t.minFilter=De,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new q(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},n=new Xe({uniforms:e,vertexShader:fd,fragmentShader:pd}),s=new Xe({uniforms:e,vertexShader:fd,fragmentShader:pd,transparent:!0,depthWrite:!1,side:pn});return{opaque:n,trans:s,uniforms:e,tex:t}}function md(i){let t=new Ke;return t.setAttribute("position",new Ne(i.pos,3)),t.setAttribute("uv",new Ne(i.uv,2)),t.setAttribute("light",new Ne(i.light,1)),t.setAttribute("lt",new Ne(i.lt,2,!0)),t.setIndex(new Ne(i.index,1)),t.computeBoundingSphere(),t}var zo=class{constructor({scene:t,mats:e,reg:n,worker:s,diffs:r,onDirty:a}){Object.assign(this,{scene:t,mats:e,reg:n,worker:s,diffs:r,onDirty:a}),this.chunks=new Map,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",o=>this.onMsg(o.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Bi(t.cx,t.cz),n=this.chunks.get(e);t.type==="chunk"&&this.inflight--,n&&(t.type==="chunk"&&(n.vox=t.vox,n.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<n.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(n,t.mesh)))}setMesh(t,e){for(let n of["o","t"])t[n]&&(this.scene.remove(t[n]),t[n].geometry.dispose(),t[n]=null);e.opaque.index.length&&(t.o=new Pe(md(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Pe(md(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}update(t,e){let n=ei(t),s=ei(e),r=Zu(n,s,this.rd);for(let c of r){if(this.inflight>=this.maxInflight)break;let l=Bi(c.cx,c.cz);if(this.chunks.has(l))continue;let u={cx:c.cx,cz:c.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(l,u),this.inflight++,this.worker.postMessage({type:"load",cx:c.cx,cz:c.cz,rev:u.meshRev})}let a=this.rd+1.5,o=[];for(let[c,l]of this.chunks){let u=l.cx-n,d=l.cz-s;if(u*u+d*d>a*a){for(let h of["o","t"])l[h]&&(this.scene.remove(l[h]),l[h].geometry.dispose());this.chunks.delete(c),o.push(c)}}o.length&&this.worker.postMessage({type:"drop",keys:o.filter(c=>{let[l,u]=c.split(",").map(Number);return Math.abs(l-n)>this.rd+3||Math.abs(u-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(c=>c.state==="ready").length}ready(t,e){let n=this.chunks.get(Bi(ei(t),ei(e)));return!!(n&&n.state==="ready")}get(t,e,n){let s=wc(t,e,n);if(!s)return e<0?13:0;let r=this.chunks.get(Bi(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,n,s){let r=wc(t,e,n);if(!r)return!1;let a=Bi(r.cx,r.cz),o=this.chunks.get(a);if(!o||!o.vox)return!1;o.vox[r.i]=s,od(this.diffs,a,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:n,n:s});let c=Math.floor(t),l=Math.floor(n);for(let[u,d]of P_(c,l)){let h=this.chunks.get(Bi(u,d));h&&h.state==="ready"&&(h.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:u,cz:d,rev:h.meshRev}))}return this.onDirty&&this.onDirty(a),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var L_="hw_world";var ko=null;function _d(){return ko||(ko=new Promise((i,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(L_,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}),ko)}function Fc(i,t){return _d().then(e=>new Promise((n,s)=>{let r=e.transaction("kv",i),a=r.objectStore("kv"),o=t(a);r.oncomplete=()=>n(o instanceof IDBRequest?o.result:void 0),r.onerror=()=>s(r.error)}))}var Oc=i=>Fc("readonly",t=>t.get(i)),Bc=i=>Fc("readwrite",t=>{for(let e in i)t.put(i[e],e)});async function xd(i){let t=await _d();return new Promise((e,n)=>{let s={},r=t.transaction("kv","readonly"),a=r.objectStore("kv").openCursor(IDBKeyRange.bound(i,i+"\uFFFF"));a.onsuccess=()=>{let o=a.result;o&&(s[o.key]=o.value,o.continue())},r.oncomplete=()=>e(s),r.onerror=()=>n(r.error)})}async function yd(i){let t={};for(let e of i){let n=await Oc(e);n!==void 0&&(t[e]=n)}await Fc("readwrite",e=>e.clear()),await Bc(t)}function W(i,t,...e){let n=document.createElement(i);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?n.addEventListener(s.slice(2),r):s==="html"?n.innerHTML=r:n.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}var Gi=i=>document.querySelector(i);var N_="../../",U_=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],zc=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],Vo=null;function F_(i){return new Promise((t,e)=>{let n=document.createElement("script");n.src=i,n.onload=t,n.onerror=()=>e(new Error("load "+i)),document.head.appendChild(n)})}function kc(){return Vo||(Vo=(async()=>{for(let t of U_)await F_(N_+t);let i=window;return new i.KE.Engine({words:i.DATA_WORDS||[],phrases:i.DATA_PHRASES||[],roots:i.DATA_ROOTS||[],grammar:i.DATA_GRAMMAR||[],patterns:i.DATA_PATTERNS||[]})})().catch(i=>{throw Vo=null,i})),Vo}async function vd(i,{onReward:t,onClose:e,count:n=5}){i.innerHTML="",i.hidden=!1;let s=W("div",{class:"panel quiz"});i.append(s),s.append(W("div",{class:"p-head"},W("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),W("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),W("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let r;try{r=await kc()}catch{s.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,o=[],c=0,l=0,u=0;function d(){i.hidden=!0,i.innerHTML="",e&&e()}function h(){o=r.buildQuiz({modules:["words","phrases","grammar","patterns"],types:zc,lv:1,count:n}),o.length||(o=r.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:n})),c=0,l=0,u=0,f()}function f(){s.innerHTML="";let m=o[c],p=a.isTyped(m);i._q=m;let T=W("div",{class:"fb"}),A=W("div",{class:"q-body"});s.append(W("div",{class:"p-head"},W("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",W("small",{},`\u7B2C ${c+1} / ${o.length} \u984C`)),W("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),W("div",{class:"q-type"},(a.TYPES[m.type]||"\u984C\u76EE")+(p?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),W("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?W("div",{class:"q-sub"},m.sub):null,A,T);let M=!1,w=E=>{if(M)return;M=!0;let L=nd(E,p);E&&(u++,l+=L,t&&t(L)),T.className="fb "+(E?"ok":"bad"),T.append(W("div",{},E?`\u7B54\u5C0D\u4E86\uFF01 +${L} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",E?null:W("b",{class:"en"},m.answer)),!E&&m.why?W("div",{class:"why"},m.why):null,W("button",{class:"btn",onclick:g},c+1<o.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(m.input==="type"){let E=W("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),L=()=>{M||!E.value.trim()||w(r.check(m,E.value).ok)};E.addEventListener("keydown",y=>{y.stopPropagation(),y.key==="Enter"&&L()}),A.append(W("div",{class:"typerow"},E,W("button",{class:"btn",onclick:L},"\u9001\u51FA"))),setTimeout(()=>E.focus(),50)}else{let E=W("div",{class:"opts"});(m.options||[]).forEach(L=>E.append(W("button",{class:"opt"+(/[a-z]/i.test(L)?" en":""),onclick:y=>{if(M)return;let C=r.check(m,L).ok;y.currentTarget.classList.add(C?"ok":"bad"),w(C)}},L))),A.append(E)}}function g(){c++,c<o.length?f():x()}function x(){s.innerHTML="",s.append(W("div",{class:"p-head"},W("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),W("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),W("p",{class:"big"},`\u7B54\u5C0D ${u} / ${o.length} \u984C\uFF0C\u62FF\u5230 ${l} \u91D1\u5E63`),W("div",{class:"row"},W("button",{class:"btn",onclick:h},"\u518D\u4F86\u4E00\u56DE"),W("button",{class:"btn ghost",onclick:d},"\u56DE\u53BB\u84CB\u623F\u5B50")))}h()}var O_=new Set(zc);async function Md(i,{ids:t=[],onDone:e}){i.innerHTML="",i.hidden=!1;let n=W("div",{class:"panel quiz"});i.append(n),n.append(W("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let s;try{s=await kc()}catch{n.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{i.hidden=!0,e&&e(null)},1200);return}let r=window.KE,a=null;for(let f of t){let g=s.byId[f];if(g&&O_.has(g.type)){a=s.get(f);break}}let o=!!a;a||(a=s.buildQuiz({modules:["words","phrases","grammar","patterns"],types:zc,lv:1,count:1})[0]);let c=r.isTyped(a);i._q=a,n.innerHTML="";let l=W("div",{class:"fb"}),u=W("div",{class:"q-body"});n.append(W("div",{class:"p-head"},W("h2",{},"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),W("div",{class:"q-type"},(o?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":r.TYPES[a.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),W("div",{class:"q-prompt"+(a.en?" en":"")},a.prompt),a.sub?W("div",{class:"q-sub"},a.sub):null,u,l);let d=!1,h=f=>{d||(d=!0,l.className="fb "+(f?"ok":"bad"),l.append(W("div",{},f?"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",f?null:W("b",{class:"en"},a.answer)),!f&&a.why?W("div",{class:"why"},a.why):null,W("button",{class:"btn",onclick:()=>{i.hidden=!0,i.innerHTML="",e&&e(f,c)}},"\u7E7C\u7E8C")))};if(a.input==="type"){let f=W("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),g=()=>{d||!f.value.trim()||h(s.check(a,f.value).ok)};f.addEventListener("keydown",x=>{x.stopPropagation(),x.key==="Enter"&&g()}),u.append(W("div",{class:"typerow"},f,W("button",{class:"btn",onclick:g},"\u9001\u51FA"))),setTimeout(()=>f.focus(),50)}else{let f=W("div",{class:"opts"});(a.options||[]).forEach(g=>f.append(W("button",{class:"opt"+(/[a-z]/i.test(g)?" en":""),onclick:x=>{if(d)return;let m=s.check(a,g).ok;x.currentTarget.classList.add(m?"ok":"bad"),h(m)}},g))),u.append(f)}}async function Sd(i,{quest:t,onDone:e}){i.innerHTML="",i.hidden=!1;let n=W("div",{class:"panel quiz"});i.append(n),n.append(W("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await kc()}catch{n.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{i.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,a=s.buildQuiz({modules:[t.module],types:t.types,lv:t.lv,count:t.count});a.length||(a=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let o=0,c=0,l=()=>{n.innerHTML="";let u=a[o];i._q=u;let d=W("div",{class:"fb"}),h=W("div",{class:"q-body"});n.append(W("div",{class:"p-head"},W("h2",{},t.title_zh+" ",W("small",{},`\u7B2C ${o+1} / ${a.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),W("div",{class:"q-type"},r.TYPES[u.type]||"\u984C\u76EE"),W("div",{class:"q-prompt"+(u.en?" en":"")},u.prompt),u.sub?W("div",{class:"q-sub"},u.sub):null,h,d);let f=!1,g=x=>{f||(f=!0,x&&c++,d.className="fb "+(x?"ok":"bad"),d.append(W("div",{},x?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",x?null:W("b",{class:"en"},u.answer)),!x&&u.why?W("div",{class:"why"},u.why):null,W("button",{class:"btn",onclick:()=>{o++,o<a.length?l():(i.hidden=!0,i.innerHTML="",e&&e(c,a.length))}},o+1<a.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(u.input==="type"){let x=W("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),m=()=>{f||!x.value.trim()||g(s.check(u,x.value).ok)};x.addEventListener("keydown",p=>{p.stopPropagation(),p.key==="Enter"&&m()}),h.append(W("div",{class:"typerow"},x,W("button",{class:"btn",onclick:m},"\u9001\u51FA"))),setTimeout(()=>x.focus(),50)}else{let x=W("div",{class:"opts"});(u.options||[]).forEach(m=>x.append(W("button",{class:"opt"+(/[a-z]/i.test(m)?" en":""),onclick:p=>{if(f)return;let T=s.check(u,m).ok;p.currentTarget.classList.add(T?"ok":"bad"),g(T)}},m))),h.append(x)}};l()}function bd(i,t,e){let[n,s]=String(i).split(",").map(Number),r=u=>Rn(4242,n|0,t*7+u,s|0),a=e.professions[Math.floor(r(1)*e.professions.length)],o=e.quests,c=Math.floor(r(2)*o.length),l=(c+1+Math.floor(r(3)*(o.length-1)))%o.length;return{prof:a,quests:[o[c],o[l]]}}function wd(i,t,e,n=()=>64){return i.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?Ts(i,e.blueprint)?{ok:!1,reason:"owned"}:(br(i,e.price),i.owned.push(e.blueprint),{ok:!0}):Sr(t,e.give,e.count,n)?(br(i,e.price),nn(t,e.give,e.count,n),{ok:!0}):{ok:!1,reason:"full"}}var Vc=(i,t,e)=>!!(i&&i[t.id]===e);function Ed(i,t,e,n,s,r,a=()=>64){if(Vc(i,t,n))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};i[t.id]=n,Vi(s,t.reward.coins|0);let o={};for(let c in t.reward.items||{}){let l=nn(r,c,t.reward.items[c],a);l&&(o[c]=l)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:o}}function Td(i=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(i)}var z_=[1,2,4,6,8];function Go(i,t){if(!i||i.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+i.hardness*.55,n=i.tier|0,r=!!(t&&i.tool&&t.type===i.tool)?t.tier:0;return n>0&&r<n?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/z_[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Gc(i,t,e,n=1){let s=i.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let a=r.durability;return s.dur=(s.dur==null?a:s.dur)-n,s.dur<=0?(i.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:a}}function Ad(i,t){let e=i&&t.toolOf(i.id);if(!e)return null;let n=e.durability,s=i.dur==null?n:i.dur;return{left:s,max:n,frac:s/n}}var $c={};jo($c,{collect:()=>qc,createFurnace:()=>Hc,dismantle:()=>Yc,start:()=>Wc,tick:()=>Xc});function Hc(){return{fuel:0,jobs:[],done:{}}}function Wc(i,t,e,n=4){if(Pn(t,e.in)<1)return{ok:!1,reason:"materials"};let s=i.jobs.length;if(i.fuel-s<1){if(Pn(t,"coal")<1)return{ok:!1,reason:"fuel"};Mr(t,"coal",1),i.fuel+=n}return Mr(t,e.in,1),i.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function Xc(i,t){for(;t>0&&i.jobs.length;){let e=i.jobs[0],n=Math.min(t,e.left);e.left-=n,t-=n,e.left<=1e-9&&(i.jobs.shift(),i.fuel-=1,i.done[e.out]=(i.done[e.out]||0)+1)}return i}function qc(i,t,e=()=>64){let n=0;for(let s of Object.keys(i.done)){let r=nn(t,s,i.done[s],e);n+=i.done[s]-r,r?i.done[s]=r:delete i.done[s]}return n}function Yc(i){let t=Object.assign({},i.done);for(let e of i.jobs)t[e.in]=(t[e.in]||0)+1;return t}var eh={};jo(eh,{MAX_HP:()=>Ho,REGEN_EVERY:()=>V_,SAFE_FALL:()=>k_,createHealth:()=>Zc,damage:()=>Kc,fallDamage:()=>Jc,hearts:()=>th,regen:()=>jc,respawnPoint:()=>Qc});var Ho=20,k_=4,V_=4;function Zc(i=20){return{hp:Math.max(0,Math.min(20,i)),regenT:0}}function Jc(i,{water:t=!1,flying:e=!1}={}){return t||e||i<=4?0:Math.floor((i-4)/2)+1}function Kc(i,t){return t>0&&(i.hp=Math.max(0,i.hp-t),i.regenT=0),i.hp<=0}function jc(i,t){return i.hp<=0||i.hp>=20?(i.regenT=0,!1):(i.regenT+=t,i.regenT>=4?(i.regenT-=4,i.hp=Math.min(20,i.hp+1),!0):!1)}function Qc(i,t,e){return i&&e?{x:i.x+.5,y:i.y+1,z:i.z+.5}:{x:t.x,y:t.y,z:t.z}}function th(i){let t=[];for(let e=0;e<20/2;e++){let n=i-e*2;t.push(n>=2?"full":n===1?"half":"empty")}return t}var Wo={animal:8,quiz:4};function Cd(){return{list:[],nextId:1}}var Xo=(i,t)=>i.list.reduce((e,n)=>e+(n.kind===t&&!n.gone?1:0),0);function Rd(i,t,e){let n={id:i.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return i.list.push(n),n}function Id(i,t){return i<.2&&!t}function Pd(i,t,e){return i.kind==="quiz"?t>.45||e>48:e>72}function Ld(i,t,e,n){let s=i.def,r=t.x-i.p.x,a=t.z-i.p.z,o=Math.hypot(r,a);if(i.t+=e,i.busy){i.v.x=0,i.v.z=0,i.kind==="villager"&&(i.yaw=Math.atan2(-r,-a));return}if(i.home){let c=i.home.x-i.p.x,l=i.home.z-i.p.z,u=Math.hypot(c,l);if(u>10){i.yaw=Math.atan2(-c,-l),i.v.x=c/u*s.speed,i.v.z=l/u*s.speed,i.t=0,i.turn=1;return}}if(i.kind==="quiz"&&o<16){i.yaw=Math.atan2(-r,-a);let c=o>1.6?s.speed:0;i.v.x=r/(o||1)*c,i.v.z=a/(o||1)*c;return}i.t>=i.turn&&(i.t=0,i.turn=2+n()*4,n()<.35?(i.v.x=0,i.v.z=0):(i.yaw=n()*Math.PI*2,i.v.x=-Math.sin(i.yaw)*s.speed,i.v.z=-Math.cos(i.yaw)*s.speed))}function Dd(i,t,e){if(i.kind!=="animal"||i.gone)return null;if(i.hp-=t?i.hp:1,i.hp>0)return{drops:null};i.gone=!0;let n=i.def.drops||{},s=(n.min||1)+Math.floor(e()*((n.max||1)-(n.min||1)+1));return{drops:n.id?{id:n.id,n:s}:null}}var Nd=(i,t)=>i?(t?2:1)+1:0;function Ud(i,t,e,n,s){let r=[e.x-n/2,e.y,e.z-n/2],a=[e.x+n/2,e.y+s,e.z+n/2],o=[i.x,i.y,i.z],c=[t.x,t.y,t.z],l=0,u=1/0;for(let d=0;d<3;d++){if(Math.abs(c[d])<1e-9){if(o[d]<r[d]||o[d]>a[d])return null;continue}let h=(r[d]-o[d])/c[d],f=(a[d]-o[d])/c[d];if(h>f&&([h,f]=[f,h]),l=Math.max(l,h),u=Math.min(u,f),l>u)return null}return l}function Fd(i){return Object.keys(i||{}).filter(t=>i[t]&&!i[t].d).sort((t,e)=>(i[e].u||0)-(i[t].u||0))}var Od=i=>`../hero-island/?map=${encodeURIComponent(i)}&from=world`;function Bd(i,t){let e=new Set(t||[]);return(Array.isArray(i)?i:[]).filter(n=>n&&n.id&&!e.has(n.id))}function zd(i,t,e,n,s=()=>64){let r=(t||[]).find(l=>l.map===i.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let a=r.reward.coins|0,o=Object.assign({},r.reward.items),c={};Vi(n,a);for(let l in o){let u=nn(e,l,o[l],s);u&&(c[l]=u)}return{ok:!0,coins:a,items:o,leftovers:c,name_zh:r.name_zh}}function kd(i,t,e){let n=new Set;for(let r of Array.isArray(i)?i:[])r&&r.map&&n.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&n.add(r.map);return n}function nh(i,t,e){let n=(t||[]).findIndex(r=>r.map===i);if(n<0)return{ok:!1,need:null};if(n===0)return{ok:!0};let s=t[n-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function Vd(i,t){let e=(i||[]).findIndex(n=>!t.has(n.map));return e<=0?null:nh(i[e].map,i,t).ok?i[e]:null}var Xn={};function As(i){return Xn[i]||(Xn[i]=new wn({color:i,transparent:!0}),Xn[i].userData.base=new se(i)),Xn[i]}var wr=null;function W_(){if(wr)return wr;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),wr=new Vn(i),wr.colorSpace=ze,wr}function Gd(i,t){let e=new bn,n=i.colors,[s,r]=i.size,a=(c,l,u,d,h,f,g,x)=>{let m=new Pe(new ln(c,l,u),x||As(d));return m.position.set(h,f,g),e.add(m),m},o=[];if(i.kind==="villager"){for(let l of[-.13,.13]){let u=a(.2,.6,.22,n.leg,l,.6,0);u.geometry.translate(0,-.6/2,0),o.push(u)}a(.56,.78,.34,t||n.body,0,.6+.39,0);for(let l of[-.36,.36])a(.16,.62,.18,t||n.body,l,1.3399999999999999,0).geometry.translate(0,-.27,0);a(.42,.42,.4,n.head,0,.6+.78+.22,0),a(.5,.1,.48,n.hat,0,.6+.78+.46,0),a(.32,.14,.3,n.hat,0,.6+.78+.56,0),a(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(i.kind==="quiz"){let c=a(s,r*.72,s*.8,n.body,0,r*.36+.12,0);Xn.__face||(Xn.__face=new wn({map:W_(),transparent:!0}),Xn.__face.userData.base=new se("#ffffff"));let l=[As(n.head),As(n.head),As(n.head),As(n.head),As(n.head),Xn.__face],u=new Pe(new ln(s*.9,s*.8,s*.8),l);u.position.set(0,r*.72+s*.4,0),e.add(u),o.push(a(.18,.24,.18,n.head,-.2,.12,0),a(.18,.24,.18,n.head,.2,.12,0))}else{let c=i.id==="chicken"?.25:.45,l=r-c-(i.id==="chicken"?.15:.25);a(s,l,i.id==="chicken"?s:s*1.35,n.body,0,c+l/2,0),n.patch&&a(s*.5,l*.55,.02+s*1.36,n.patch,s*.12,c+l*.55,0);let u=i.id==="chicken"?.3:.45,d=a(u,u,u,n.head,0,c+l+u*.25,-(i.id==="chicken"?s*.35:s*.75));n.comb&&(a(.08,.12,.14,n.comb,0,d.position.y+u/2+.05,d.position.z),a(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-u/2-.05));let h=i.id==="chicken"?.06:.18,f=i.id==="chicken"?0:s*.45,g=s*.3;for(let[x,m]of i.id==="chicken"?[[-.1,0],[.1,0]]:[[-g,-f],[g,-f],[-g,f],[g,f]]){let p=a(h,c,h,n.leg,x,c/2,m);p.geometry.translate(0,-c/2,0),p.position.y=c,o.push(p)}}return e.userData.legs=o,e}function Hd(i){for(let t in Xn){let e=Xn[t];e.color.copy(e.userData.base).multiplyScalar(i)}}function ih(i,t,e){i.position.set(t.p.x,t.p.y,t.p.z),i.rotation.y=t.yaw;let n=Math.hypot(t.v.x,t.v.z)>.05,s=n?Math.sin(e*8+t.id)*.5:0;if(i.userData.legs.forEach((r,a)=>{r.rotation.x=a%2?s:-s}),t.kind==="quiz"&&(i.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);i.scale.setScalar(r),i.rotation.y+=t.goneT*12}}var qo="93a959b6b3",sh=new URLSearchParams(location.search),Y_=720,Xd=5,$_=20261008,Z_=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,b={touch:Z_,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[]};function J_(i,t){try{let e=localStorage.getItem(i);return e??t}catch{return t}}function K_(i,t){try{localStorage.setItem(i,t)}catch{}}async function j_(){let[i,t,e,n,s,r]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json"].map(S=>fetch(S,{cache:"no-cache"}).then(P=>P.json()))),a=$u(i),o=t.recipes||[],c=S=>a.maxStack(S),l={};try{let[S,P,tt,z,et,st,ft]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests"].map(Oc));l={meta:S,player:P,inv:tt,coins:z,furnaces:et,claimed:st,quests:ft,chunks:await xd("hw_chunk:")}}catch(S){console.warn("save unavailable",S)}let u=l.meta&&l.meta.seed||$_,d=ed(u,a,s),h=ld(Object.fromEntries(Object.entries(l.chunks||{}).map(([S,P])=>[S.slice(9),P]))),f=l.inv?Lc(l.inv):Uo(),g=ad(l.coins),x=Zc(l.player&&l.player.hp!=null?l.player.hp:20);b.bed=l.player&&l.player.bed||null;let m=n.portals||[],p=Array.isArray(l.claimed)?l.claimed.slice():[],T=l.furnaces||{},A=l.quests||{},M=t.smelt||[],w=t.fuelPerCoal||4;l.meta&&typeof l.meta.time=="number"&&(b.time=l.meta.time);let E=Gi("#c"),L=new Ro({canvas:E,antialias:!1,powerPreference:"high-performance"});L.setPixelRatio(Math.min(window.devicePixelRatio||1,b.touch?1.5:1.25));let y=new $s,C=new se("#EFEBDD");y.background=C;let D=new We(72,1,.08,200);D.rotation.order="YXZ";let G=hd(a),N=ud(a,G),O=gd(G.canvas),I=new Worker("assets/hw-worker.js?v="+qo),U=new zo({scene:y,mats:O,reg:a,worker:I,diffs:h,onDirty:S=>b.dirty.add(S)}),J=Math.max(2,Math.min(6,parseInt(sh.get("rd")||J_("hw_rd",b.touch?"3":"4"),10)||4));U.setRenderDistance(J),D.far=J*16+40,D.updateProjectionMatrix();let H=await new Promise(S=>{let P=tt=>{tt.data.type==="ready"&&(I.removeEventListener("message",P),S(tt.data.spawn))};I.addEventListener("message",P),I.postMessage({type:"init",seed:u,blocks:i,structures:s,diffs:Object.fromEntries([...h].map(([tt,z])=>[tt,Uc(z)]))})});l.player?Object.assign(b,{p:{x:l.player.x,y:l.player.y,z:l.player.z},yaw:l.player.yaw||0,pitch:l.player.pitch||0,fly:!!l.player.fly,sel:l.player.sel|0}):(b.p={x:H.x,y:H.y,z:H.z},b.yaw=Math.atan2(-(H.stele.x+.5-H.x),-(H.stele.z+.5-H.z)),b.pitch=-.15);let rt=new tr(new ir(new ln(1.004,1.004,1.004)),new ms({color:1382164,transparent:!0,opacity:.45}));rt.visible=!1,y.add(rt);let K=dd().map(S=>new Vn(S)),j=new Pe(new ln(1.01,1.01,1.01),new wn({map:K[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));j.visible=!1,y.add(j);let at=(S,P)=>{let tt=document.createElement("canvas");tt.width=tt.height=64;let z=tt.getContext("2d");z.fillStyle=S,z.beginPath(),z.arc(32,32,28,0,7),z.fill(),P&&(z.globalCompositeOperation="destination-out",z.beginPath(),z.arc(44,26,24,0,7),z.fill());let et=new Vn(tt);return et.colorSpace=ze,et},pt=new Di(new ui({map:at("#F2C46B"),depthWrite:!1,fog:!1})),ht=new Di(new ui({map:at("#EDE6D0",!0),depthWrite:!1,fog:!1}));y.add(pt,ht);let vt=new bn,dt=(S,P,tt,z,et,st,ft)=>{let yt=new Pe(new ln(S,P,tt),new wn({color:z}));return yt.position.set(et,st,ft),yt.userData.base=new se(z),vt.add(yt),yt},Pt=dt(.24,.75,.26,"#26302A",-.14,.375,0),Z=dt(.24,.75,.26,"#26302A",.14,.375,0);dt(.56,.7,.3,"#2F5A34",0,1.1,0);let it=dt(.18,.66,.2,"#E7CDA6",-.38,1.12,0),xt=dt(.18,.66,.2,"#E7CDA6",.38,1.12,0);dt(.46,.42,.42,"#E7CDA6",0,1.66,0),dt(.5,.14,.46,"#151714",0,1.9,.02),dt(.12,.12,.05,"#E0352B",.16,1.92,-.24),[Pt,Z,it,xt].forEach(S=>{S.geometry.translate(0,-S.geometry.parameters.height/2+.05,0),S.position.y+=S.geometry.parameters.height/2-.05}),vt.visible=!1,y.add(vt);let Mt={},mt=S=>Mt[S]||(Mt[S]=(()=>{let P=new Image;P.src=N[S];let tt=new Ve(P);return tt.colorSpace=ze,P.onload=()=>{tt.needsUpdate=!0},new ui({map:tt,depthWrite:!0,alphaTest:.3})})());function Lt(S,P,tt,z){let et=new Di(mt(S));et.scale.set(.42,.42,1),y.add(et),b.drops.push({id:S,s:et,p:{x:P,y:tt,z},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let ne=(S,P,tt)=>a.flat.solid[U.get(S,P,tt)]===1,Ot=Object.fromEntries((e.mobs||[]).map(S=>[S.id,S])),qt=Cd(),$t=new Map,Xt=0;function ue(S,P){for(let tt=61;tt>0;tt--){let z=U.get(S,tt,P);if(a.flat.solid[z])return U.get(S,tt+1,P)||U.get(S,tt+2,P)?null:{y:tt+1,n:z};if(a.flat.liquid[z])return null}return null}function be(S,P,tt,z=7){for(let et=-z;et<=z;et++)for(let st=-z;st<=z;st++)for(let ft=-z;ft<=z;ft++)if(a.flat.lightEmit[U.get(S+ft,P+et,tt+st)])return!0;return!1}function Ee(S,P,tt,z,et){let st=Rd(qt,S,{x:P+.5,y:tt,z:z+.5}),ft=Gd(S,et);return $t.set(st.id,ft),y.add(ft),st}let pe=new Set;function xe(){for(let S of d.villages.around(b.p.x-64,b.p.z-64,b.p.x+64,b.p.z+64))if(!(pe.has(S.id)||!U.ready(S.x,S.z))){pe.add(S.id);for(let P=0;P<S.villagers;P++){let tt=bd(S.id,P,r),z=S.x+(P%2?2:-2),et=S.z+(P-1),st=ue(z,et),ft=Ee(Ot.villager,z,st?st.y:S.y+1,et,tt.prof.color);Object.assign(ft,{home:{x:S.x,z:S.z},village:S.id,role:tt})}}}function V(S){Ot.villager&&xe();let P=Math.random()*Math.PI*2,tt=14+Math.random()*14,z=Math.floor(b.p.x+Math.cos(P)*tt),et=Math.floor(b.p.z+Math.sin(P)*tt);if(!U.ready(z,et))return;let st=ue(z,et);if(st)if(Xo(qt,"animal")<Wo.animal&&st.n===a.num("grass")&&S>.3){let ft=Object.values(Ot).filter(Jt=>Jt.kind==="animal"),yt=ft[Math.floor(Math.random()*ft.length)],Wt=1+Math.floor(Math.random()*3);for(let Jt=0;Jt<Wt&&Xo(qt,"animal")<Wo.animal;Jt++){let kt=z+Jt%2,te=et+(Jt>>1),ge=ue(kt,te);ge&&Ee(yt,kt,ge.y,te)}}else Xo(qt,"quiz")<Wo.quiz&&Id(S,be(z,st.y,et))&&Ot.quizling&&Ee(Ot.quizling,z,st.y,et)}function Ce(S,P,tt){Xt+=S,Xt>2.5&&b.started&&(Xt=0,V(P));for(let z=qt.list.length-1;z>=0;z--){let et=qt.list[z],st=$t.get(et.id),ft=Math.hypot(et.p.x-b.p.x,et.p.z-b.p.z);if(et.gone){et.goneT=(et.goneT||0)+S,ih(st,et,tt/1e3),et.goneT>.35&&(y.remove(st),$t.delete(et.id),qt.list.splice(z,1));continue}if(Pd(et,P,ft)){et.gone=!0,et.goneT=0,et.village&&pe.delete(et.village);continue}if(!U.ready(et.p.x,et.p.z))continue;Ld(et,b.p,S,Math.random),et.v.y-=20*S,et.v.y<-20&&(et.v.y=-20);let yt=Do(et.p,et.v,S,ne,{w:Math.min(.9,et.def.size[0]),h:et.def.size[1],canStep:!0,grounded:et.onGround});et.onGround=yt.onGround,a.flat.liquid[U.get(et.p.x,et.p.y+.3,et.p.z)]&&(et.v.y=2),ih(st,et,tt/1e3)}Hd(.35+.65*P)}function de(S,P,tt){let z,et;S==="screen"?(gn.set(P/innerWidth*2-1,-(tt/innerHeight)*2+1,.5).unproject(D).sub(D.position).normalize(),z={x:D.position.x,y:D.position.y,z:D.position.z},et={x:gn.x,y:gn.y,z:gn.z}):(z=qn(),et=Xi());let st=S==="screen"?$e("screen",P,tt):$e("center"),ft=null,yt=b.view==="tp"&&S==="screen"?8:4.5;st&&(yt=Math.min(yt,st.dist+.5));for(let Wt of qt.list){if(Wt.gone)continue;let Jt=Ud(z,et,Wt.p,Wt.def.size[0],Wt.def.size[1]);Jt!=null&&Jt<yt&&(yt=Jt,ft=Wt)}return ft}function R(){try{return Fd(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function _(S){if(S.kind==="villager"){Yo(S);return}if(S.kind==="animal"){let tt=f.slots[b.sel],z=!!(tt&&a.toolOf(tt.id)&&a.toolOf(tt.id).type==="sword"),et=Dd(S,z,Math.random);if(S.v.y=4,S.v.x+=(S.p.x-b.p.x)*1.5,S.v.z+=(S.p.z-b.p.z)*1.5,z){let st=Gc(f,b.sel,a);st.broke&&Q(`\u4F60\u7684${a.name(st.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),_t()}if(et&&et.drops)for(let st=0;st<et.drops.n;st++)Lt(et.drops.id,S.p.x,S.p.y+.6,S.p.z);return}if(S.busy)return;S.busy=!0,_n(),document.pointerLockElement&&document.exitPointerLock(),b.overlay="ask";let P=R().slice(0,30).sort(()=>Math.random()-.5);Md(B.ov,{ids:P,onDone:(tt,z)=>{if(b.overlay=null,S.busy=!1,tt){let et=Nd(!0,z);Vi(g,et),gt(),S.gone=!0,S.goneT=0,Q(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${et} \u91D1\u5E63`),b.dirtyMeta=!0,F(),b.stats.quizWins=(b.stats.quizWins||0)+1}else if(tt===!1){let et=b.p.x-S.p.x,st=b.p.z-S.p.z,ft=Math.hypot(et,st)||1;b.v.x=et/ft*7,b.v.z=st/ft*7,b.v.y=4.5,S.p.x-=et/ft*1.5,S.p.z-=st/ft*1.5,Q("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let X=(S,P,tt)=>U.get(S,P,tt),B=Q_();function Q(S){let P=W("div",{class:"toast"},S);B.toasts.append(P),setTimeout(()=>P.remove(),2200)}function gt(){B.coins.textContent=g.coins}let St="";function ot(){let S=th(x.hp),P=S.join();P!==St&&(St=P,B.hearts.innerHTML="",S.forEach(tt=>B.hearts.append(W("i",{class:"ht "+tt}))))}function ct(S){if(b.dead||S<=0)return;let P=Kc(x,S);ot(),b.dirtyMeta=!0,B.flash.classList.remove("on"),B.flash.offsetWidth,B.flash.classList.add("on"),P&&wt()}function wt(){b.dead=!0,_n(),document.pointerLockElement&&document.exitPointerLock(),b.overlay="dead";let S=B.ov;S.innerHTML="",S.hidden=!1,S.append(W("div",{class:"panel start"},W("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),W("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),W("button",{class:"btn big",onclick:Vt},b.bed?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function Vt(){let S=Qc(b.bed,H,!!b.bed);b.p={x:S.x,y:S.y,z:S.z},b.v={x:0,y:0,z:0},b.fallTop=S.y,x.hp=20,b.dead=!1,ot(),Ie(),b.dirtyMeta=!0,Q(b.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function _t(){B.hotbar.innerHTML="";for(let P=0;P<9;P++){let tt=f.slots[P];B.hotbar.append(W("button",{class:"slot"+(P===b.sel?" on":""),"aria-label":tt?a.name(tt.id):"\u7A7A\u683C",onpointerdown:z=>{z.stopPropagation(),b.sel=P,_t()}},tt?W("img",{src:N[tt.id],alt:""}):null,tt&&tt.count>1?W("span",{class:"cnt"},tt.count):null,bt(tt),W("span",{class:"key"},P+1)))}let S=f.slots[b.sel];B.selName.textContent=S?a.name(S.id):""}function bt(S){let P=Ad(S,a);return!P||P.left>=P.max?null:W("span",{class:"dur"+(P.frac<.25?" low":"")},W("i",{style:"width:"+Math.round(P.frac*100)+"%"}))}function Gt(S=4){let P=new Set,tt=Math.floor(b.p.x),z=Math.floor(b.p.y),et=Math.floor(b.p.z);for(let st=-S;st<=S;st++)for(let ft=-S;ft<=S;ft++)for(let yt=-S;yt<=S;yt++){let Wt=U.get(tt+yt,z+st,et+ft);Wt&&P.add(a.get(Wt).id)}return P}let Yt=()=>({near:Gt(),owned:new Set(g.owned)}),Kt=-1;function k(){let S=B.ov;S.innerHTML="",S.hidden=!1;let P=W("div",{class:"inv-grid"}),tt=yt=>{let Wt=f.slots[yt];return W("button",{class:"slot"+(yt===Kt?" pick":"")+(yt<9?" hb":""),title:Wt?a.name(Wt.id):"",onclick:()=>{Kt<0?f.slots[yt]&&(Kt=yt):(Pc(f,Kt,yt,c),Kt=-1,b.dirtyMeta=!0),k(),_t()}},Wt?W("img",{src:N[Wt.id],alt:""}):null,Wt&&Wt.count>1?W("span",{class:"cnt"},Wt.count):null,bt(Wt))};for(let yt=9;yt<36;yt++)P.append(tt(yt));let z=W("div",{class:"inv-grid hbrow"});for(let yt=0;yt<9;yt++)z.append(tt(yt));let et=W("div",{class:"craft"},W("h3",{},"\u5408\u6210")),st=Yt(),ft={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};o.forEach(yt=>{let Wt=Oo(f,yt,st),Jt=Wt.ok;yt.blueprint&&Wt.reason==="blueprint"&&!Object.keys(yt.in).some(kt=>kt!=="stick"&&Pn(f,kt)>0)||et.append(W("div",{class:"rcp"+(Jt?"":" no")},W("img",{src:N[yt.out.id],alt:""}),W("div",{class:"rcp-t"},W("b",{},`${yt.name_zh} \xD7${yt.out.count}`),W("small",{},Object.keys(yt.in).map(kt=>`${a.name(kt)} ${Pn(f,kt)}/${yt.in[kt]}`).join("\u3001")+(ft[Wt.reason]?"\u3000\xB7 "+ft[Wt.reason]:""))),W("button",{class:"btn small",onclick:()=>{let kt=Dc(f,yt,c,Yt());kt.ok?(Q(`\u505A\u597D\u4E86\uFF1A${yt.name_zh} \xD7${yt.out.count}`),b.dirtyMeta=!0):Q({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[kt.reason]||"\u6750\u6599\u4E0D\u5920"),k(),_t()}},"\u88FD\u4F5C")))}),S.append(W("div",{class:"panel inv"},W("div",{class:"p-head"},W("h2",{},"\u80CC\u5305"),W("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ie},"\xD7")),W("div",{class:"inv-wrap"},W("div",{},W("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),P,z),et)))}let Et=id(a);function lt(){let S=B.ov;S.innerHTML="",S.hidden=!1;let P=W("div",{class:"shop"}),tt=Vd(m,ye());Et.filter(z=>!z.id.startsWith("portal_")||tt&&z.id===tt.block).forEach(z=>P.append(W("div",{class:"offer"+(z.locked?" locked":"")},W("img",{src:N[z.id],alt:""}),W("div",{class:"of-t"},W("b",{},`${z.name_zh}${z.qty>1?" \xD7"+z.qty:""}`),W("small",{},z.locked?`\uFF08${z.locked}\uFF09`:`${z.price} \u91D1\u5E63${z.desc?"\u3000"+z.desc:""}`)),Ts(g,z.id)?W("span",{class:"owned"},"\u5DF2\u64C1\u6709"):W("button",{class:"btn small",disabled:z.locked?!0:null,onclick:()=>Tt(z)},z.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),S.append(W("div",{class:"panel"},W("div",{class:"p-head"},W("h2",{},"\u5546\u5E97\u3000",W("span",{class:"coin"}),` ${g.coins}`),W("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ie},"\xD7")),W("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),P))}function Tt(S){let P=sd(g,f,S,c);P.ok?(Q(S.blueprint?`\u62FF\u5230 ${S.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${S.name_zh} \xD7${S.qty}`),b.dirtyMeta=!0,gt(),_t(),F()):Q({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[P.reason]||"\u8CB7\u4E0D\u4E86"),lt()}let Ct=null;function ut(){let S=B.ov,P=T[Ct]||(T[Ct]=Hc());S.innerHTML="",S.hidden=!1;let tt=P.jobs[0],z=W("div",{class:"shop"});M.forEach(st=>{let ft=Pn(f,st.in);z.append(W("div",{class:"offer"+(ft?"":" locked")},W("img",{src:N[st.in],alt:""}),W("div",{class:"of-t"},W("b",{},`${a.name(st.in)} \u2192 ${a.name(st.out)}`),W("small",{},`\u6709 ${ft} \u500B \xB7 \u6BCF\u500B ${st.time} \u79D2`)),W("button",{class:"btn small",onclick:()=>{let yt=Wc(P,f,st,w);yt.ok||Q(yt.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),b.dirtyMeta=!0,_t(),ut()}},"\u653E\u9032\u53BB")))});let et=Object.values(P.done).reduce((st,ft)=>st+ft,0);S.append(W("div",{class:"panel"},W("div",{class:"p-head"},W("h2",{},"\u7194\u7210"),W("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ie},"\xD7")),W("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,P.fuel-P.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${Pn(f,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${w} \u500B\uFF09`),W("div",{class:"furnace-st"},tt?`\u6B63\u5728\u71D2\uFF1A${a.name(tt.in)}\uFF08\u9084\u8981 ${Math.ceil(tt.left)} \u79D2\uFF0C\u6392\u968A ${P.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),W("div",{class:"row"},W("button",{class:"btn",disabled:et?null:!0,onclick:()=>{let st=qc(P,f,c);st&&Q(`\u62FF\u51FA ${st} \u500B`),b.dirtyMeta=!0,_t(),ut()}},`\u62FF\u51FA\u4F86\uFF08${et}\uFF09`)),z))}let Ht=null,Ft=(S,P)=>{try{return JSON.parse(localStorage.getItem(S)||"null")||P}catch{return P}},ye=()=>kd(Ft("hw_portal_rewards",[]),Ft("hi_save",null),m),me='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function sn(){let S=m.find(et=>et.map===Ht),P=B.ov;if(P.innerHTML="",P.hidden=!1,!S){Ie();return}let tt=Object.keys(S.reward.items).map(et=>`${a.name(et)} \xD7${S.reward.items[et]}`).join("\u3001"),z=nh(S.map,m,ye());if(!z.ok){P.append(W("div",{class:"panel start"},W("div",{class:"p-head"},W("h2",{},"\u50B3\u9001\u9580\u30FB"+S.name_zh),W("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ie},"\xD7")),W("div",{class:"padlock",html:me}),W("p",{class:"big"},`\u5148\u6253\u5012 ${z.need.boss_zh} \u624D\u80FD\u9032\u5165`),W("p",{class:"muted"},`\u5F9E\u300C${z.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${z.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),W("div",{class:"row"},W("button",{class:"btn ghost",onclick:Ie},"\u77E5\u9053\u4E86"))));return}P.append(W("div",{class:"panel start"},W("div",{class:"p-head"},W("h2",{},"\u50B3\u9001\u9580\u30FB"+S.name_zh),W("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ie},"\xD7")),W("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${S.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${S.reward.coins} \u91D1\u5E63\u3001${tt}\u3002`),W("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),W("div",{class:"row"},W("button",{class:"btn big",onclick:async()=>{await F(),b.leaving=Od(S.map),location.href=b.leaving}},"\u9032\u5165"),W("button",{class:"btn ghost",onclick:Ie},"\u5148\u4E0D\u8981"))))}function Qe(){let S;try{S=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{S=[]}let P=Bd(S,p);for(let tt of P){let z=zd(tt,m,f,g,c);if(p.push(tt.id),!!z.ok){for(let et in z.leftovers)for(let st=0;st<z.leftovers[et];st++)Lt(et,b.p.x,b.p.y+1,b.p.z);Q(`\u5F9E${z.name_zh}\u5E36\u56DE\u4F86\uFF1A${z.coins} \u91D1\u5E63\u3001${Object.keys(z.items).map(et=>a.name(et)+" \xD7"+z.items[et]).join("\u3001")}`)}}return P.length&&(gt(),_t(),b.dirtyMeta=!0,F()),P.length}let bi=null;function Yo(S){bi=S,S.busy=!0,rn("trade")}function Hi(){let S=bi,P=B.ov;if(!S)return Ie();P.innerHTML="",P.hidden=!1;let tt=S.role,z=Td(),et=W("div",{class:"shop"});tt.prof.offers.forEach(ft=>{let yt=ft.blueprint||ft.give,Wt=!!ft.blueprint,Jt=Wt&&a.blueprints.find(te=>te.id===ft.blueprint),kt=Wt&&Ts(g,ft.blueprint);et.append(W("div",{class:"offer"},W("img",{src:N[yt],alt:""}),W("div",{class:"of-t"},W("b",{},Wt?Jt.name_zh:`${a.name(yt)}${ft.count>1?" \xD7"+ft.count:""}`),W("small",{},`${ft.price} \u91D1\u5E63${Wt?"\u3000"+(Jt.desc||""):""}`)),kt?W("span",{class:"owned"},"\u5DF2\u64C1\u6709"):W("button",{class:"btn small",onclick:()=>{let te=wd(g,f,ft,c);te.ok?(Q(Wt?`\u62FF\u5230 ${Jt.name_zh}\uFF01`:`\u8CB7\u5230 ${a.name(yt)} \xD7${ft.count}`),b.dirtyMeta=!0,gt(),_t(),F()):Q({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[te.reason]||"\u8CB7\u4E0D\u4E86"),Hi()}},"\u8CFC\u8CB7")))});let st=W("div",{class:"quests"});tt.quests.forEach(ft=>{let yt=Vc(A,ft,z),Wt=Object.keys(ft.reward.items||{}).map(Jt=>`${a.name(Jt)} \xD7${ft.reward.items[Jt]}`).join("\u3001");st.append(W("div",{class:"offer quest"+(yt?" locked":"")},W("div",{class:"of-t"},W("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+ft.title_zh),W("small",{},`${ft.desc}\uFF0C\u7B54\u5C0D ${ft.need} \u984C \u2192 ${ft.reward.coins} \u91D1\u5E63\u3001${Wt}`)),yt?W("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):W("button",{class:"btn small",onclick:()=>{b.overlay="quest",Sd(B.ov,{quest:ft,onDone:Jt=>{if(b.overlay="trade",Jt>=0){let kt=Ed(A,ft,Jt,z,g,f,c);if(kt.ok){for(let te in kt.leftovers)for(let ge=0;ge<kt.leftovers[te];ge++)Lt(te,b.p.x,b.p.y+1,b.p.z);Q(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${kt.coins} \u91D1\u5E63\u3001${Wt}`),gt(),_t(),b.dirtyMeta=!0,F(),b.stats.quests=(b.stats.quests||0)+1}else Q(`\u7B54\u5C0D ${Jt} \u984C\uFF0C\u8981 ${ft.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Hi()}})}},"\u63A5\u59D4\u8A17")))}),P.append(W("div",{class:"panel"},W("div",{class:"p-head"},W("h2",{},`\u6751\u6C11\u30FB${tt.prof.name_zh}\u3000`,W("span",{class:"coin"}),` ${g.coins}`),W("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ie},"\xD7")),W("h3",{},"\u4EA4\u6613"),et,W("h3",{},"\u82F1\u6587\u59D4\u8A17"),W("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),st))}function Cs(){let S=B.ov;S.innerHTML="",S.hidden=!1;let P=W("b",{},U.rd),tt=W("input",{type:"range",min:2,max:6,step:1,value:U.rd,oninput:z=>{P.textContent=z.target.value},onchange:z=>{let et=+z.target.value;U.setRenderDistance(et),D.far=et*16+40,D.updateProjectionMatrix(),K_("hw_rd",et)}});S.append(W("div",{class:"panel"},W("div",{class:"p-head"},W("h2",{},"\u8A2D\u5B9A"),W("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ie},"\xD7")),W("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",P,tt),W("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),W("div",{class:"row"},W("button",{class:"btn ghost",onclick:$o},"\u91CD\u7F6E\u4E16\u754C")),W("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),W("p",{class:"muted small"},"\u7248\u672C "+qo)))}async function $o(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){b.resetting=!0;try{await yd(["hw_coins"])}catch(S){console.warn(S)}location.reload()}}function rn(S){document.pointerLockElement&&document.exitPointerLock(),b.overlay=S,_n(),S==="inv"?(Kt=-1,k()):S==="shop"?lt():S==="set"?Cs():S==="furnace"?ut():S==="portal"?sn():S==="trade"?Hi():S==="quiz"&&vd(B.ov,{onReward:P=>{Vi(g,P),gt(),b.dirtyMeta=!0,F()},onClose:()=>{b.overlay=null}})}function Ie(){B.ov.hidden=!0,B.ov.innerHTML="",b.overlay=null,bi&&(bi.busy=!1,bi=null)}B.btnInv.onclick=()=>b.overlay==="inv"?Ie():rn("inv"),B.btnShop.onclick=()=>b.overlay==="shop"?Ie():rn("shop"),B.btnSet.onclick=()=>b.overlay==="set"?Ie():rn("set"),B.btnView.onclick=()=>Dn();function Dn(){b.view=b.view==="fp"?"tp":"fp",Q(b.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Wi(){b.fly=!b.fly,b.v.y=0,B.root.classList.toggle("flying",b.fly),Q(b.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC")}let gn=new q;function Xi(){let S=Math.cos(b.pitch);return{x:-Math.sin(b.yaw)*S,y:Math.sin(b.pitch),z:-Math.cos(b.yaw)*S}}let qn=()=>({x:b.p.x,y:b.p.y+1.62+b.eyeOff,z:b.p.z}),Rs=S=>S&&!a.flat.liquid[S];function $e(S,P,tt){if(S==="screen"){gn.set(P/innerWidth*2-1,-(tt/innerHeight)*2+1,.5).unproject(D).sub(D.position).normalize();let z=D.position,et=b.view==="tp"?z.distanceTo(new q(b.p.x,b.p.y+1.62,b.p.z)):0;return No({x:z.x,y:z.y,z:z.z},{x:gn.x,y:gn.y,z:gn.z},Xd+1+et,X,Rs)}return No(qn(),Xi(),Xd,X,Rs)}function _n(){b.mining.active=!1,b.mining.k="",b.mining.t=0,j.visible=!1}let Is=()=>{let S=f.slots[b.sel];return S?a.toolOf(S.id):null};function Zo(S){let P=S.n,tt=Go(a.get(P),Is());if(!U.set(S.x,S.y,S.z,0))return;let z=tt.harvest?a.dropOf(P):null;z?Lt(z,S.x+.5,S.y+.4,S.z+.5):tt.harvest||Q(`${a.name(P)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let et=S.x+","+S.y+","+S.z;if(b.bed&&b.bed.x===S.x&&b.bed.y===S.y&&b.bed.z===S.z&&(b.bed=null,Q("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),T[et]){let st=Yc(T[et]);for(let ft in st)for(let yt=0;yt<st[ft];yt++)Lt(ft,S.x+.5,S.y+.4,S.z+.5);delete T[et]}if(tt.usesTool){let st=Gc(f,b.sel,a);st.broke&&Q(`\u4F60\u7684${a.name(st.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),_t()}b.dirtyMeta=!0,b.stats.mined++}function wi(S){if(!S)return!1;let P=a.get(S.n);if(P&&P.interact==="quiz")return rn("quiz"),!0;let tt=f.slots[b.sel]&&a.get(f.slots[b.sel].id).placeable;if(P&&P.interact==="portal"&&!tt)return Ht=P.portal,rn("portal"),!0;if(P&&P.interact==="bed"&&!tt)return b.bed={x:S.x,y:S.y,z:S.z},b.dirtyMeta=!0,Q("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(P&&P.interact==="craft"&&!tt)return rn("inv"),!0;if(P&&P.interact==="furnace"&&!tt)return Ct=S.x+","+S.y+","+S.z,rn("furnace"),!0;let z=f.slots[b.sel];if(!z)return Q("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let et=a.get(z.id);if(!et||!et.placeable)return Q(`${a.name(z.id)} \u4E0D\u80FD\u653E`),!1;let st=S.x+S.face[0],ft=S.y+S.face[1],yt=S.z+S.face[2];if(ft<0||ft>=64)return!1;let Wt=U.get(st,ft,yt);if(Wt&&!a.flat.liquid[Wt])return!1;let Jt=.6/2;return et.solid&&st+1>b.p.x-Jt&&st<b.p.x+Jt&&yt+1>b.p.z-Jt&&yt<b.p.z+Jt&&ft+1>b.p.y&&ft<b.p.y+1.8||!U.set(st,ft,yt,et.n)?!1:(Ic(f,b.sel,1),b.dirtyMeta=!0,_t(),b.stats.placed++,!0)}addEventListener("keydown",S=>{if(S.target&&S.target.tagName==="INPUT")return;let P=S.key.toLowerCase();if(P==="e"){b.overlay==="inv"?Ie():!b.overlay&&rn("inv"),S.preventDefault();return}if(b.overlay!=="dead"&&!(b.overlay==="ask"||b.overlay==="quest")){if(P==="escape"&&b.overlay){b.overlay==="quiz"?(B.ov.hidden=!0,B.ov.innerHTML="",b.overlay=null):Ie();return}b.overlay||(b.keys[P]=!0,S.code==="Space"&&(b.keys[" "]=!0,S.preventDefault()),P>="1"&&P<="9"&&(b.sel=+P-1,_t()),P==="f"&&Wi(),P==="v"&&Dn())}}),addEventListener("keyup",S=>{b.keys[S.key.toLowerCase()]=!1,S.code==="Space"&&(b.keys[" "]=!1)}),addEventListener("blur",()=>{b.keys={},_n()}),E.addEventListener("mousedown",S=>{if(!(b.touch||b.overlay)){if(document.pointerLockElement!==E){E.requestPointerLock&&E.requestPointerLock();return}if(S.button===0){let P=de("center");if(P){_(P);return}b.mining.active=!0,b.mining.src="center"}S.button===2&&(wi($e("center")),b.placeRepeat=.3,b.rightHeld=!0)}}),addEventListener("mouseup",S=>{S.button===0&&_n(),S.button===2&&(b.rightHeld=!1)}),E.addEventListener("contextmenu",S=>S.preventDefault()),addEventListener("mousemove",S=>{document.pointerLockElement===E&&(b.yaw-=S.movementX*.0024,b.pitch=Math.max(-1.55,Math.min(1.55,b.pitch-S.movementY*.0024)))}),addEventListener("wheel",S=>{b.overlay||b.touch||(b.sel=(b.sel+(S.deltaY>0?1:8))%9,_t())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{B.root.classList.toggle("locked",document.pointerLockElement===E)});let Ei=new Map;function Jo(S){b.touch!==S&&(b.touch=S,B.root.classList.toggle("touch",S),document.body.classList.toggle("is-touch",S))}B.root.classList.toggle("touch",b.touch),document.body.classList.toggle("is-touch",b.touch),E.addEventListener("pointerdown",S=>{if(S.pointerType!=="touch"||(Jo(!0),b.overlay))return;if(S.preventDefault(),S.clientX<innerWidth*.4&&S.clientY>innerHeight*.35&&!b.joy.active){b.joy={x:0,y:0,active:!0,id:S.pointerId,ox:S.clientX,oy:S.clientY},B.joy.style.transform=`translate(${S.clientX-60}px, ${S.clientY-60}px)`,B.joy.hidden=!1,B.knob.style.transform="translate(0px,0px)",Ei.set(S.pointerId,{kind:"joy"});return}let P={kind:"look",x:S.clientX,y:S.clientY,sx:S.clientX,sy:S.clientY,t0:performance.now(),drag:!1,hold:!1};P.timer=setTimeout(()=>{P.drag||(P.hold=!0,b.mining.active=!0,b.mining.src="screen",b.mining.sx=P.x,b.mining.sy=P.y)},280),Ei.set(S.pointerId,P)},{passive:!1}),addEventListener("pointermove",S=>{let P=Ei.get(S.pointerId);if(!P)return;if(P.kind==="joy"){let et=S.clientX-b.joy.ox,st=S.clientY-b.joy.oy,ft=Math.hypot(et,st),yt=55;ft>yt&&(et*=yt/ft,st*=yt/ft),b.joy.x=et/yt,b.joy.y=st/yt,B.knob.style.transform=`translate(${et}px,${st}px)`;return}let tt=S.clientX-P.x,z=S.clientY-P.y;P.x=S.clientX,P.y=S.clientY,!P.drag&&Math.hypot(P.x-P.sx,P.y-P.sy)>12&&(P.drag=!0,clearTimeout(P.timer),P.hold&&(_n(),P.hold=!1)),P.drag?(b.yaw-=tt*.0055,b.pitch=Math.max(-1.55,Math.min(1.55,b.pitch-z*.0055))):P.hold&&(b.mining.sx=P.x,b.mining.sy=P.y)});let Ps=S=>{let P=Ei.get(S.pointerId);if(P){if(Ei.delete(S.pointerId),P.kind==="joy"){b.joy={x:0,y:0,active:!1},B.joy.hidden=!0;return}if(clearTimeout(P.timer),P.hold)_n();else if(!P.drag&&performance.now()-P.t0<280&&!b.overlay){let tt=de("screen",P.x,P.y);tt?_(tt):wi($e("screen",P.x,P.y))}}};addEventListener("pointerup",Ps),addEventListener("pointercancel",Ps);let v=(S,P,tt)=>{S.addEventListener("pointerdown",z=>{z.preventDefault(),z.stopPropagation(),P()}),S.addEventListener("pointerup",tt),S.addEventListener("pointercancel",tt),S.addEventListener("pointerleave",tt)};v(B.bJump,()=>{b.jumpHeld=!0},()=>{b.jumpHeld=!1}),v(B.bDown,()=>{b.downHeld=!0},()=>{b.downHeld=!1}),B.bFly.addEventListener("pointerdown",S=>{S.preventDefault(),S.stopPropagation(),Wi()}),B.bPlace.addEventListener("pointerdown",S=>{S.preventDefault(),S.stopPropagation(),wi($e("center"))}),document.addEventListener("touchmove",S=>{S.target.closest(".scroll, .panel")||S.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(S=>document.addEventListener(S,P=>P.preventDefault(),{passive:!1})),B.start.hidden=!1,B.go.onclick=()=>{B.start.hidden=!0,b.started=!0,b.paused=!1,B.root.classList.add("started"),!b.touch&&E.requestPointerLock&&E.requestPointerLock()};async function F(){if(b.resetting)return;let S={hw_meta:{v:1,seed:u,time:b.time,build:qo},hw_player:{x:b.p.x,y:b.p.y,z:b.p.z,yaw:b.yaw,pitch:b.pitch,fly:b.fly,sel:b.sel,hp:x.hp,bed:b.bed},hw_inventory:Fo(f),hw_coins:rd(g),hw_furnaces:T,hw_quests:A,hw_portal_claimed:p.slice(-200)};for(let P of b.dirty){let tt=h.get(P);tt&&(S["hw_chunk:"+P]=Uc(tt))}b.dirty.clear(),b.dirtyMeta=!1;try{await Bc(S),b.lastSave=Date.now()}catch(P){console.warn("save failed",P)}}setInterval(()=>{b.started&&F()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&b.started&&F()}),addEventListener("pagehide",()=>{b.started&&F()}),b.stats={mined:0,placed:0};function nt(){let S=innerWidth,P=innerHeight;L.setSize(S,P,!1),D.aspect=S/P,D.updateProjectionMatrix()}addEventListener("resize",nt),nt(),gt(),_t(),ot(),Qe(),addEventListener("pageshow",S=>{S.persisted&&Qe()});let $=performance.now(),Y=0,At=0,Dt=new se("#EFEBDD"),Rt=new se("#22302F"),Nt=new se("#E6B48C");function Bt(S){requestAnimationFrame(Bt);let P=(S-$)/1e3;$=S;let tt=Math.min(.05,P);b.frames.push(P*1e3),b.frames.length>4e3&&b.frames.shift(),U.update(b.p.x,b.p.z);let z=U.ready(b.p.x,b.p.z);b.auto&&Re(tt),b.started&&!b.overlay&&z&&oe(tt),b.started&&!b.dead&&jc(x,tt)&&(ot(),b.dirtyMeta=!0),b.time=(b.time+tt/Y_)%1;let et=b.time*Math.PI*2,st=Math.sin(et),ft=Math.min(1,Math.max(0,(st+.12)/.42));C.copy(Rt).lerp(Dt,ft);let yt=Math.max(0,1-Math.abs(st)/.3)*(ft>.05?1:.4);C.lerp(Nt,yt*.55),O.uniforms.uDay.value=ft,O.uniforms.uFog.value.set(...re(C));let Wt=qn();b.eyeOff*=Math.pow(5e-4,tt);let Jt=Xi();if(b.view==="tp"){let ge=No(Wt,{x:-Jt.x,y:-Jt.y,z:-Jt.z},4,X,Oe=>a.flat.opaque[Oe]===1),ie=ge?Math.max(.4,ge.dist-.25):4;D.position.set(Wt.x-Jt.x*ie,Wt.y-Jt.y*ie,Wt.z-Jt.z*ie)}else D.position.set(Wt.x,Wt.y,Wt.z);D.rotation.set(b.pitch,b.yaw,0);let kt=D.far*.8;if(pt.position.set(D.position.x+Math.cos(et)*kt,D.position.y+Math.sin(et)*kt,D.position.z+.25*kt),pt.scale.setScalar(kt*.14),ht.position.set(D.position.x-Math.cos(et)*kt,D.position.y-Math.sin(et)*kt,D.position.z-.25*kt),ht.scale.setScalar(kt*.1),vt.visible=b.view==="tp",vt.visible){vt.position.set(b.p.x,b.p.y,b.p.z),vt.rotation.y=b.yaw;let ge=Math.hypot(b.v.x,b.v.z),ie=Math.sin(S/120)*Math.min(1,ge/4)*.7;Pt.rotation.x=ie,Z.rotation.x=-ie,it.rotation.x=-ie,xt.rotation.x=ie;let Oe=.35+.65*ft;vt.children.forEach(dn=>dn.material.color.copy(dn.userData.base).multiplyScalar(Oe))}for(let ge in Mt)Mt[ge].color.setScalar(.4+.6*ft);let te=b.started&&!b.overlay?b.mining.active&&b.mining.src==="screen"?$e("screen",b.mining.sx,b.mining.sy):$e("center"):null;if(te?(rt.visible=!0,rt.position.set(te.x+.5,te.y+.5,te.z+.5)):rt.visible=!1,b.mining.active&&te){let ge=te.x+","+te.y+","+te.z;ge!==b.mining.k&&(b.mining.k=ge,b.mining.t=0),b.mining.t+=tt;let ie=Go(a.get(te.n),Is()).time;if(ie===1/0)j.visible=!1,b.mining.warned||(Q(a.name(te.n)+"\u6316\u4E0D\u52D5"),b.mining.warned=!0);else{let Oe=b.mining.t/ie;j.visible=!0,j.position.copy(rt.position),j.material.map=K[Math.min(3,Math.floor(Oe*4))],Oe>=1&&(Zo(te),b.mining.k="",b.mining.t=0,j.visible=!1)}}else j.visible=!1,b.mining.active||(b.mining.warned=!1);b.rightHeld&&!b.overlay&&(b.placeRepeat-=tt,b.placeRepeat<=0&&(wi($e("center")),b.placeRepeat=.25)),Ut(tt),Ce(b.overlay?0:tt,ft,S);for(let ge in T){let ie=T[ge];ie.jobs.length&&(Xc(ie,tt),b.dirtyMeta=!0,b.overlay==="furnace"&&ge===Ct&&(b.furnUi=(b.furnUi||0)+tt)>.5&&(b.furnUi=0,ut()))}L.render(y,D),Y+=P,At++,Y>.5&&(B.dbg&&(B.dbg.textContent=`${Math.round(At/Y)} fps \xB7 \u5340\u584A ${U.stats.loaded} \xB7 ${td[d.biomeOf(Math.floor(b.p.x),Math.floor(b.p.z))]} \xB7 ${b.p.x.toFixed(1)}, ${b.p.y.toFixed(1)}, ${b.p.z.toFixed(1)}`),Y=0,At=0),!z&&b.started?B.loading.hidden=!1:B.loading.hidden=!0}function re(S){let P=S.getHexString();return[parseInt(P.slice(0,2),16)/255,parseInt(P.slice(2,4),16)/255,parseInt(P.slice(4,6),16)/255]}function oe(S){let P=b.keys,tt=(P.d?1:0)-(P.a?1:0),z=(P.w?1:0)-(P.s?1:0);b.joy.active&&(tt=b.joy.x,z=-b.joy.y);let et=Math.min(1,Math.hypot(tt,z));if(et>0){let Ti=Math.hypot(tt,z);tt=tt/Ti*et,z=z/Ti*et}let st=-Math.sin(b.yaw),ft=-Math.cos(b.yaw),yt=Math.cos(b.yaw),Wt=-Math.sin(b.yaw),Jt=P.control||!b.fly&&P.shift||b.joy.active&&et>.92,kt=X(b.p.x,b.p.y+.1,b.p.z),te=X(b.p.x,b.p.y+1,b.p.z),ge=a.flat.liquid[kt]===1||a.flat.liquid[te]===1,ie=b.fly?10:ge?2.6:Jt?6.2:4.3,Oe=(st*z+yt*tt)*ie,dn=(ft*z+Wt*tt)*ie,qi=P[" "]||b.jumpHeld,qd=b.fly&&P.shift||b.downHeld;if(b.fly)b.v.x=Oe,b.v.z=dn,b.v.y=((qi?1:0)-(qd?1:0))*8;else{let Ti=b.onGround?14:5,ah=1-Math.exp(-Ti*S);b.v.x+=(Oe-b.v.x)*ah,b.v.z+=(dn-b.v.z)*ah,ge?(b.v.y-=9*S,b.v.y<-3&&(b.v.y=-3),qi&&(b.v.y=3.4)):(b.v.y-=28*S,b.v.y<-40&&(b.v.y=-40),qi&&b.onGround&&(b.v.y=8.6,b.onGround=!1))}let rh=b.onGround,Ko=Do(b.p,b.v,S,ne,{canStep:!b.fly,grounded:b.onGround});if(b.onGround=Ko.onGround,Ko.stepped&&(b.eyeOff-=Ko.stepped),b.fallTop==null||b.fly||ge||b.onGround&&rh?b.fallTop=b.p.y:b.onGround||(b.fallTop=Math.max(b.fallTop,b.p.y)),b.onGround&&!rh){let Ti=Jc(b.fallTop-b.p.y,{water:ge,flying:b.fly});Ti&&(ct(Ti),Q("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),b.fallTop=b.p.y}b.p.y<-20&&(b.p={x:H.x,y:H.y+1,z:H.z},b.v={x:0,y:0,z:0},b.fallTop=b.p.y)}function Ut(S){let P=b.p.x,tt=b.p.y+.9,z=b.p.z;for(let et=b.drops.length-1;et>=0;et--){let st=b.drops[et];st.age+=S;let ft=P-st.p.x,yt=tt-st.p.y,Wt=z-st.p.z,Jt=Math.hypot(ft,yt,Wt);if(Jt<1.5&&st.age>.25&&nn(f,st.id,1,c)===0){y.remove(st.s),b.drops.splice(et,1),b.dirtyMeta=!0,_t();continue}if(Jt<4.5&&st.age>.25?(st.v.x=ft/Jt*6,st.v.y=yt/Jt*6,st.v.z=Wt/Jt*6,st.p.x+=st.v.x*S,st.p.y+=st.v.y*S,st.p.z+=st.v.z*S):(st.v.y-=18*S,st.v.x*=.9,st.v.z*=.9,Do(st.p,st.v,S,ne,{w:.25,h:.25})),st.age>300){y.remove(st.s),b.drops.splice(et,1);continue}st.s.position.set(st.p.x,st.p.y+.2+Math.sin(st.age*3)*.06,st.p.z)}}b.auto=sh.get("auto")==="walk";let fe=0;function Re(S){b.started||B.go.click(),fe+=S,b.keys.w=!0,b.keys[" "]=fe%1.6<.15,b.yaw+=S*.08}window.HW={build:qo,G:b,reg:a,inv:f,wallet:g,world:U,Inv:Nc,questState:A,tradesJson:r,spawnVillagers:xe,terr:d,claimPortalRewards:Qe,portals:m,claimedIds:p,mobS:qt,mobDefs:Ot,spawnMob:Ee,hitMob:_,mobAt:de,surfaceY:ue,health:x,hurt:ct,Health:eh,furnaces:T,Smelt:$c,smeltList:M,recipes:o,craftCtx:Yt,breakInfo:Go,start(){B.go.click()},state(){return{pos:{...b.p},coins:g.coins,inv:Fo(f),loaded:U.stats.loaded,stats:{...b.stats},overlay:b.overlay,fly:b.fly}},lookAt(S,P,tt){let z=qn(),et=S-z.x,st=P-z.y,ft=tt-z.z;b.yaw=Math.atan2(-et,-ft),b.pitch=Math.atan2(st,Math.hypot(et,ft))},target(){let S=$e("center");return S&&{x:S.x,y:S.y,z:S.z,n:S.n,face:S.face}},mine(S){S?(b.mining.active=!0,b.mining.src="center"):_n()},use(){return wi($e("center"))},key(S,P){b.keys[S]=P},open:rn,close:Ie,save:F,spawn:H,perf(){return{frames:b.frames.slice(),meshMs:U.stats.meshMs.slice(),genMs:U.stats.genMs.slice(),loaded:U.stats.loaded}},resetPerf(){b.frames.length=0,U.stats.meshMs.length=0,U.stats.genMs.length=0},ready:()=>U.ready(b.p.x,b.p.z)},requestAnimationFrame(Bt)}function Q_(){let i=Gi("#ui"),t=e=>i.querySelector(e);return sh.get("debug")!==null&&(t("#dbg").hidden=!1),{root:i,coins:t("#coins"),hearts:t("#hearts"),flash:Gi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Gi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Gi("#start"),go:Gi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}j_().catch(i=>{console.error(i);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+i.message)});})();
