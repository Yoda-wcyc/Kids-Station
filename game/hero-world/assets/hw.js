(()=>{var Zf=Object.defineProperty;var Qo=(n,t)=>{for(var e in t)Zf(n,e,{get:t[e],enumerable:!0})};var Nh=0,Il=1,Uh=2;var or=1,Fh=2,gs=3,xi=0,tn=1,mn=2,Gn=0,_s=1,Pl=2,Ll=3,Dl=4,Oh=5;var Ui=100,Bh=101,zh=102,kh=103,Vh=104,Gh=200,Hh=201,Wh=202,Xh=203,Nl=204,Ul=205,qh=206,Yh=207,$h=208,Zh=209,Jh=210,Kh=211,jh=212,Qh=213,tu=214,sa=0,ra=1,aa=2,us=3,oa=4,la=5,ca=6,ha=7,Fl=0,eu=1,nu=2,Tn=0,Ol=1,Bl=2,zl=3,kl=4,Vl=5,Gl=6,Hl=7;var Wl=300,yi=301,Fi=302,ka=303,Va=304,lr=306,ua=1e3,On=1001,fa=1002,Ve=1003,iu=1004;var cr=1005;var Ne=1006,Ga=1007;var vi=1008;var dn=1009,Xl=1010,ql=1011,xs=1012,Ha=1013,An=1014,Cn=1015,Rn=1016,Wa=1017,Xa=1018,ys=1020,Yl=35902,$l=35899,Zl=1021,Jl=1022,gn=1023,Bn=1026,Mi=1027,Kl=1028,qa=1029,Si=1030,Ya=1031;var $a=1033,hr=33776,ur=33777,fr=33778,dr=33779,Za=35840,Ja=35841,Ka=35842,ja=35843,Qa=36196,to=37492,eo=37496,no=37488,io=37489,pr=37490,so=37491,ro=37808,ao=37809,oo=37810,lo=37811,co=37812,ho=37813,uo=37814,fo=37815,po=37816,mo=37817,go=37818,_o=37819,xo=37820,yo=37821,vo=36492,Mo=36494,So=36495,bo=36283,wo=36284,mr=36285,Eo=36286;var zs=2300,da=2301,ea=2302,wl=2303,El=2400,Tl=2401,Al=2402;var su=3200;var jl=0,ru=1,ti="",ke="srgb",ks="srgb-linear",Vs="linear",xe="srgb";var na=7680;var au=519,ou=512,lu=513,cu=514,To=515,hu=516,uu=517,Ao=518,fu=519,Ql=35044;var tc="300 es",bn=2e3,Gs=2001;function Jf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Kf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function du(){let n=Hs("canvas");return n.style.display="block",n}var ch={},fs=null;function Ws(...n){let t="THREE."+n.shift();fs?fs("log",t,...n):console.log(t,...n)}function pu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Jt(...n){n=pu(n);let t="THREE."+n.shift();if(fs)fs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function te(...n){n=pu(n);let t="THREE."+n.shift();if(fs)fs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Li(...n){let t=n.join(" ");t in ch||(ch[t]=!0,Jt(...n))}function mu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var gu={[sa]:ra,[aa]:ca,[oa]:ha,[us]:la,[ra]:sa,[ca]:aa,[ha]:oa,[la]:us},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ia=Math.PI/180,pa=180/Math.PI;function hi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function fe(n,t,e){return Math.max(t,Math.min(e,n))}function jf(n,t){return(n%t+t)%t}function tl(n,t,e){return(1-e)*n+e*t}function Un(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rc=class rc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rc.prototype.isVector2=!0;var ce=rc,kn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],f=i[s+2],h=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(h!==v||c!==u||l!==d||f!==g){let m=c*u+l*d+f*g+h*v;m<0&&(u=-u,d=-d,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let A=Math.acos(m),L=Math.sin(A);p=Math.sin(p*A)/L,o=Math.sin(o*A)/L,c=c*p+u*o,l=l*p+d*o,f=f*p+g*o,h=h*p+v*o}else{c=c*p+u*o,l=l*p+d*o,f=f*p+g*o,h=h*p+v*o;let A=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=A,l*=A,f*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],f=i[s+3],h=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+f*h+c*d-l*u,t[e+1]=c*g+f*u+l*h-o*d,t[e+2]=l*g+f*d+o*u-c*h,t[e+3]=f*g-o*h-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),f=o(s/2),h=o(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*f*h+l*d*g,this._y=l*d*h-u*f*g,this._z=l*f*g+u*d*h,this._w=l*f*h-u*d*g;break;case"YXZ":this._x=u*f*h+l*d*g,this._y=l*d*h-u*f*g,this._z=l*f*g-u*d*h,this._w=l*f*h+u*d*g;break;case"ZXY":this._x=u*f*h-l*d*g,this._y=l*d*h+u*f*g,this._z=l*f*g+u*d*h,this._w=l*f*h-u*d*g;break;case"ZYX":this._x=u*f*h-l*d*g,this._y=l*d*h+u*f*g,this._z=l*f*g-u*d*h,this._w=l*f*h+u*d*g;break;case"YZX":this._x=u*f*h+l*d*g,this._y=l*d*h+u*f*g,this._z=l*f*g-u*d*h,this._w=l*f*h-u*d*g;break;case"XZY":this._x=u*f*h-l*d*g,this._y=l*d*h-u*f*g,this._z=l*f*g+u*d*h,this._w=l*f*h+u*d*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],f=e[6],h=e[10],u=i+o+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(i>o&&i>h){let d=2*Math.sqrt(1+i-o-h);this._w=(f-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){let d=2*Math.sqrt(1+o-i-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+f)/d}else{let d=2*Math.sqrt(1+h-i-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,f=e._w;return this._x=i*f+a*o+s*l-r*c,this._y=s*f+a*c+r*o-i*l,this._z=r*f+a*l+i*c-s*o,this._w=a*f-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,e=Math.sin(e*l)/f,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ac=class ac{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),f=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+c*l+a*h-o*f,this.y=i+c*f+o*l-r*h,this.z=s+c*h+r*f-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ac.prototype.isVector3=!0;var $=ac,el=new $,hh=new kn,oc=class oc{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=c,f[6]=i,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],f=i[4],h=i[7],u=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],A=s[1],L=s[4],b=s[7],T=s[2],w=s[5],C=s[8];return r[0]=a*v+o*A+c*T,r[3]=a*m+o*L+c*w,r[6]=a*p+o*b+c*C,r[1]=l*v+f*A+h*T,r[4]=l*m+f*L+h*w,r[7]=l*p+f*b+h*C,r[2]=u*v+d*A+g*T,r[5]=u*m+d*L+g*w,r[8]=u*p+d*b+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8];return e*a*f-e*o*l-i*r*f+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8],h=f*a-o*l,u=o*c-f*r,d=l*r-a*c,g=e*h+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=h*v,t[1]=(s*l-f*i)*v,t[2]=(o*i-s*a)*v,t[3]=u*v,t[4]=(f*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Li("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nl.makeScale(t,e)),this}rotate(t){return Li("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nl.makeRotation(-t)),this}translate(t,e){return Li("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};oc.prototype.isMatrix3=!0;var ne=oc,nl=new ne,uh=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qf(){let n={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Vs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Li("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Li("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ks]:{primaries:t,whitePoint:i,transfer:Vs,toXYZ:uh,fromXYZ:fh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:i,transfer:xe,toXYZ:uh,fromXYZ:fh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),n}var ue=Qf();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Yi,ma=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Yi===void 0&&(Yi=Hs("canvas")),Yi.width=t.width,Yi.height=t.height;let s=Yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Yi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(jn(e[i]/255)*255):e[i]=jn(e[i]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},td=0,ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(il(s[a].image)):r.push(il(s[a]))}else r=il(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function il(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ma.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var ed=0,sl=new $,Ge=class n extends zn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=On,s=On,r=Ne,a=vi,o=gn,c=dn,l=n.DEFAULT_ANISOTROPY,f=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=hi(),this.name="",this.source=new ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sl).x}get height(){return this.source.getSize(sl).y}get depth(){return this.source.getSize(sl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ua:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ua:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Wl;Ge.DEFAULT_ANISOTROPY=1;var lc=class lc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],f=c[4],h=c[8],u=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(f-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(l+1)/2,b=(d+1)/2,T=(p+1)/2,w=(f+u)/4,C=(h+v)/4,_=(g+m)/4;return L>b&&L>T?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=w/i,r=C/i):b>T?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=w/s,r=_/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=_/r),this.set(i,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(u-f)*(u-f));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-v)/A,this.z=(u-f)/A,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(fe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lc.prototype.isVector4=!0;var Re=lc,ga=class extends zn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ge(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends ga{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Xs=class extends Ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _a=class extends Ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var za=class za{constructor(t,e,i,s,r,a,o,c,l,f,h,u,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,f,h,u,d,g,v,m)}set(t,e,i,s,r,a,o,c,l,f,h,u,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new za().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=a*f,d=a*h,g=o*f,v=o*h;e[0]=c*f,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*f,d=c*h,g=l*f,v=l*h;e[0]=u+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*h,e[5]=a*f,e[9]=-o,e[2]=d*o-g,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*f,d=c*h,g=l*f,v=l*h;e[0]=u-v*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*f,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*f,d=a*h,g=o*f,v=o*h;e[0]=c*f,e[4]=g*l-d,e[8]=u*l+v,e[1]=c*h,e[5]=v*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*f,e[4]=v-u*h,e[8]=g*h+d,e[1]=h,e[5]=a*f,e[9]=-o*f,e[2]=-l*f,e[6]=d*h+g,e[10]=u-v*h}else if(t.order==="XZY"){let u=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*f,e[4]=-h,e[8]=l*f,e[1]=u*h+v,e[5]=a*f,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*f,e[10]=v*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nd,t,id)}lookAt(t,e,i){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ri.crossVectors(i,cn),ri.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ri.crossVectors(i,cn)),ri.normalize(),Cr.crossVectors(cn,ri),s[0]=ri.x,s[4]=Cr.x,s[8]=cn.x,s[1]=ri.y,s[5]=Cr.y,s[9]=cn.y,s[2]=ri.z,s[6]=Cr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],f=i[1],h=i[5],u=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],A=i[3],L=i[7],b=i[11],T=i[15],w=s[0],C=s[4],_=s[8],E=s[12],N=s[1],V=s[5],q=s[9],U=s[13],P=s[2],I=s[6],J=s[10],H=s[14],st=s[3],Z=s[7],it=s[11],rt=s[15];return r[0]=a*w+o*N+c*P+l*st,r[4]=a*C+o*V+c*I+l*Z,r[8]=a*_+o*q+c*J+l*it,r[12]=a*E+o*U+c*H+l*rt,r[1]=f*w+h*N+u*P+d*st,r[5]=f*C+h*V+u*I+d*Z,r[9]=f*_+h*q+u*J+d*it,r[13]=f*E+h*U+u*H+d*rt,r[2]=g*w+v*N+m*P+p*st,r[6]=g*C+v*V+m*I+p*Z,r[10]=g*_+v*q+m*J+p*it,r[14]=g*E+v*U+m*H+p*rt,r[3]=A*w+L*N+b*P+T*st,r[7]=A*C+L*V+b*I+T*Z,r[11]=A*_+L*q+b*J+T*it,r[15]=A*E+L*U+b*H+T*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],f=t[2],h=t[6],u=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15],A=c*d-l*u,L=o*d-l*h,b=o*u-c*h,T=a*d-l*f,w=a*u-c*f,C=a*h-o*f;return e*(v*A-m*L+p*b)-i*(g*A-m*T+p*w)+s*(g*L-v*T+p*C)-r*(g*b-v*w+m*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],f=t[10];return e*(a*f-o*l)-i*(r*f-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8],h=t[9],u=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],A=e*o-i*a,L=e*c-s*a,b=e*l-r*a,T=i*c-s*o,w=i*l-r*o,C=s*l-r*c,_=f*v-h*g,E=f*m-u*g,N=f*p-d*g,V=h*m-u*v,q=h*p-d*v,U=u*p-d*m,P=A*U-L*q+b*V+T*N-w*E+C*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/P;return t[0]=(o*U-c*q+l*V)*I,t[1]=(s*q-i*U-r*V)*I,t[2]=(v*C-m*w+p*T)*I,t[3]=(u*w-h*C-d*T)*I,t[4]=(c*N-a*U-l*E)*I,t[5]=(e*U-s*N+r*E)*I,t[6]=(m*b-g*C-p*L)*I,t[7]=(f*C-u*b+d*L)*I,t[8]=(a*q-o*N+l*_)*I,t[9]=(i*N-e*q-r*_)*I,t[10]=(g*w-v*b+p*A)*I,t[11]=(h*b-f*w-d*A)*I,t[12]=(o*E-a*V-c*_)*I,t[13]=(e*V-i*E+s*_)*I,t[14]=(v*L-g*T-m*A)*I,t[15]=(f*T-h*L+u*A)*I,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,f=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,f*o+i,f*c-s*a,0,l*c-s*o,f*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,f=a+a,h=o+o,u=r*l,d=r*f,g=r*h,v=a*f,m=a*h,p=o*h,A=c*l,L=c*f,b=c*h,T=i.x,w=i.y,C=i.z;return s[0]=(1-(v+p))*T,s[1]=(d+b)*T,s[2]=(g-L)*T,s[3]=0,s[4]=(d-b)*w,s[5]=(1-(u+p))*w,s[6]=(m+A)*w,s[7]=0,s[8]=(g+L)*C,s[9]=(m-A)*C,s[10]=(1-(u+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),c=$i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);let l=1/a,f=1/o,h=1/c;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=f,yn.elements[5]*=f,yn.elements[6]*=f,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=bn,c=!1){let l=this.elements,f=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===bn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Gs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=bn,c=!1){let l=this.elements,f=2/(e-t),h=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===bn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Gs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};za.prototype.isMatrix4=!0;var Ce=za,$i=new $,yn=new Ce,nd=new $(0,0,0),id=new $(1,1,1),ri=new $,Cr=new $,cn=new $,dh=new Ce,ph=new kn,ui=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],f=s[9],h=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ph.setFromEuler(this),this.setFromQuaternion(ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sd=0,mh=new $,Zi=new kn,Yn=new Ce,Rr=new $,Ps=new $,rd=new $,ad=new kn,gh=new $(1,0,0),_h=new $(0,1,0),xh=new $(0,0,1),yh={type:"added"},od={type:"removed"},Ji={type:"childadded",child:null},rl={type:"childremoved",child:null},sn=class n extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new ui,i=new kn,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new ne}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(gh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(xh,t)}translateOnAxis(t,e){return mh.copy(t).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Rr.copy(t):Rr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ps,Rr,this.up):Yn.lookAt(Rr,Ps,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(od),rl.child=t,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),f=a(t.images),h=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let f=o[l];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new $(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ld={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ld)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new wn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function al(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var se=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ue.workingColorSpace){if(t=jf(t,1),e=fe(e,0,1),i=fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=al(a,r,t+1/3),this.g=al(a,r,t),this.b=al(a,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function i(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let i=_u[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ue.workingToColorSpace(qe.copy(this),t),Math.round(fe(qe.r*255,0,255))*65536+Math.round(fe(qe.g*255,0,255))*256+Math.round(fe(qe.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(qe.copy(this),e);let i=qe.r,s=qe.g,r=qe.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,f=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=f<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=f,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=ke){ue.workingToColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,s=qe.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Ir);let i=tl(ai.h,Ir.h,e),s=tl(ai.s,Ir.s,e),r=tl(ai.l,Ir.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new se;se.NAMES=_u;var Ys=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vn=new $,$n=new $,ol=new $,Zn=new $,Ki=new $,ji=new $,vh=new $,ll=new $,cl=new $,hl=new $,ul=new Re,fl=new Re,dl=new Re,Fn=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){vn.subVectors(s,e),$n.subVectors(i,e),ol.subVectors(t,e);let a=vn.dot(vn),o=vn.dot($n),c=vn.dot(ol),l=$n.dot($n),f=$n.dot(ol),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(l*c-o*f)*u,g=(a*f-o*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return ul.setScalar(0),fl.setScalar(0),dl.setScalar(0),ul.fromBufferAttribute(t,e),fl.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ul,r.x),a.addScaledVector(fl,r.y),a.addScaledVector(dl,r.z),a}static isFrontFacing(t,e,i,s){return vn.subVectors(i,e),$n.subVectors(t,e),vn.cross($n).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),vn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,i),ji.subVectors(r,i),ll.subVectors(t,i);let c=Ki.dot(ll),l=ji.dot(ll);if(c<=0&&l<=0)return e.copy(i);cl.subVectors(t,s);let f=Ki.dot(cl),h=ji.dot(cl);if(f>=0&&h<=f)return e.copy(s);let u=c*h-f*l;if(u<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(i).addScaledVector(Ki,a);hl.subVectors(t,r);let d=Ki.dot(hl),g=ji.dot(hl);if(g>=0&&d<=g)return e.copy(r);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(ji,o);let m=f*g-d*h;if(m<=0&&h-f>=0&&d-g>=0)return vh.subVectors(r,s),o=(h-f)/(h-f+(d-g)),e.copy(s).addScaledVector(vh,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(i).addScaledVector(Ki,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fi=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Lr.subVectors(this.max,Ls),Qi.subVectors(t.a,Ls),ts.subVectors(t.b,Ls),es.subVectors(t.c,Ls),oi.subVectors(ts,Qi),li.subVectors(es,ts),Ci.subVectors(Qi,es);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ci.z,Ci.y,oi.z,0,-oi.x,li.z,0,-li.x,Ci.z,0,-Ci.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ci.y,Ci.x,0];return!pl(e,Qi,ts,es,Lr)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,Qi,ts,es,Lr))?!1:(Dr.crossVectors(oi,li),e=[Dr.x,Dr.y,Dr.z],pl(e,Qi,ts,es,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new $,new $,new $,new $,new $,new $,new $,new $],Mn=new $,Pr=new fi,Qi=new $,ts=new $,es=new $,oi=new $,li=new $,Ci=new $,Ls=new $,Lr=new $,Dr=new $,Ri=new $;function pl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ri.fromArray(n,r);let o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=t.dot(Ri),l=e.dot(Ri),f=i.dot(Ri);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}var De=new $,Nr=new ce,cd=0,Fe=class extends zn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ql,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Un(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var $s=class extends Fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Zs=class extends Fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var je=class extends Fe{constructor(t,e,i){super(new Float32Array(t),e,i)}},hd=new fi,Ds=new $,ml=new $,Di=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):hd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ds,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(ml)),this.expandByPoint(Ds.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ud=0,pn=new Ce,gl=new sn,ns=new $,hn=new fi,Ns=new fi,ze=new $,Qe=class n extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jf(t)?Zs:$s)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,i){return pn.makeTranslation(t,e,i),this.applyMatrix4(pn),this}scale(t,e,i){return pn.makeScale(t,e,i),this.applyMatrix4(pn),this}lookAt(t){return gl.lookAt(t),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new je(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(hn.min,Ns.min),hn.expandByPoint(ze),ze.addVectors(hn.max,Ns.max),hn.expandByPoint(ze)):(hn.expandByPoint(Ns.min),hn.expandByPoint(Ns.max))}hn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)ze.fromBufferAttribute(o,l),c&&(ns.fromBufferAttribute(t,l),ze.add(ns)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Fe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new $,c[_]=new $;let l=new $,f=new $,h=new $,u=new ce,d=new ce,g=new ce,v=new $,m=new $;function p(_,E,N){l.fromBufferAttribute(i,_),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,N),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,N),f.sub(l),h.sub(l),d.sub(u),g.sub(u);let V=1/(d.x*g.y-g.x*d.y);isFinite(V)&&(v.copy(f).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(V),m.copy(h).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(V),o[_].add(v),o[E].add(v),o[N].add(v),c[_].add(m),c[E].add(m),c[N].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let _=0,E=A.length;_<E;++_){let N=A[_],V=N.start,q=N.count;for(let U=V,P=V+q;U<P;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let L=new $,b=new $,T=new $,w=new $;function C(_){T.fromBufferAttribute(s,_),w.copy(T);let E=o[_];L.copy(E),L.sub(T.multiplyScalar(T.dot(E))).normalize(),b.crossVectors(w,E);let V=b.dot(c[_])<0?-1:1;a.setXYZW(_,L.x,L.y,L.z,V)}for(let _=0,E=A.length;_<E;++_){let N=A[_],V=N.start,q=N.count;for(let U=V,P=V+q;U<P;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new $,r=new $,a=new $,o=new $,c=new $,l=new $,f=new $,h=new $;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(f),c.add(f),l.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){let l=o.array,f=o.itemSize,h=o.normalized,u=new l.constructor(c.length*f),d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*f;for(let p=0;p<f;p++)u[g++]=l[d++]}return new Fe(u,f,h)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let f=0,h=l.length;f<h;f++){let u=l[f],d=t(u,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let h=0,u=l.length;h<u;h++){let d=l[h];f.push(d.toJSON(t.data))}f.length>0&&(s[c]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let f=s[l];this.setAttribute(l,f.clone(e))}let r=t.morphAttributes;for(let l in r){let f=[],h=r[l];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,f=a.length;l<f;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ql,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ke=new $,Js=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Un(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ws("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ws("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_l=new $,fd=new $,dd=new ne,Sn=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=_l.subVectors(i,e).cross(fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(_l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||dd.getNormalMatrix(t),s=this.coplanarPoint(_l).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pd=0,Qn=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=_s,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ul,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Sn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},di=class extends Qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},is,Us=new $,ss=new $,rs=new $,as=new ce,Fs=new ce,xu=new Ce,Ur=new $,Os=new $,Fr=new $,Mh=new ce,xl=new ce,Sh=new ce,Ni=class extends sn{constructor(t=new di){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xa(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new Js(i,3,0,!1)),is.setAttribute("uv",new Js(i,2,3,!1))}this.geometry=is,this.material=t,this.center=new ce(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&te('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),xu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Or(Ur.set(-.5,-.5,0),rs,a,ss,s,r),Or(Os.set(.5,-.5,0),rs,a,ss,s,r),Or(Fr.set(.5,.5,0),rs,a,ss,s,r),Mh.set(0,0),xl.set(1,0),Sh.set(1,1);let o=t.ray.intersectTriangle(Ur,Os,Fr,!1,Us);if(o===null&&(Or(Os.set(-.5,.5,0),rs,a,ss,s,r),xl.set(0,1),o=t.ray.intersectTriangle(Ur,Fr,Os,!1,Us),o===null))return;let c=t.ray.origin.distanceTo(Us);c<t.near||c>t.far||e.push({distance:c,point:Us.clone(),uv:Fn.getInterpolation(Us,Ur,Os,Fr,Mh,xl,Sh,new ce),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Or(n,t,e,i,s,r){as.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Fs.x=r*as.x-s*as.y,Fs.y=s*as.x+r*as.y):Fs.copy(as),n.copy(t),n.x+=Fs.x,n.y+=Fs.y,n.applyMatrix4(xu)}var Kn=new $,yl=new $,Br=new $,zr=new $,Ks=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){yl.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),zr.copy(this.origin).sub(yl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Br),o=zr.dot(this.direction),c=-zr.dot(Br),l=zr.lengthSq(),f=Math.abs(1-a*a),h,u,d,g;if(f>0)if(h=a*c-o,u=a*o-c,g=r*f,h>=0)if(u>=-g)if(u<=g){let v=1/f;h*=v,u*=v,d=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*c)+l;else u=-r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+u*(u+2*c)+l);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(yl).addScaledVector(Br,u),d}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);let i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),f>=0?(r=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-u.z)*h,c=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,c=(t.min.z-u.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,f=o.z,h=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=i.x-a.x,A=i.y-a.y,L=i.z-a.z,b=Math.abs(c),T=Math.abs(l),w=Math.abs(f),C,_,E,N,V,q,U,P,I,J,H,st;if(b>=T&&b>=w?(E=c,q=h,I=g,st=p,c>=0?(C=l,_=f,N=u,V=d,U=v,P=m,J=A,H=L):(C=f,_=l,N=d,V=u,U=m,P=v,J=L,H=A)):T>=w?(E=l,q=u,I=v,st=A,l>=0?(C=f,_=c,N=d,V=h,U=m,P=g,J=L,H=p):(C=c,_=f,N=h,V=d,U=g,P=m,J=p,H=L)):(E=f,q=d,I=m,st=L,f>=0?(C=c,_=l,N=h,V=u,U=g,P=v,J=p,H=A):(C=l,_=c,N=u,V=h,U=v,P=g,J=A,H=p)),E===0)return null;let Z=C/E,it=_/E,rt=1/E,St=N-Z*q,ft=V-it*q,xt=U-Z*I,_t=P-it*I,gt=J-Z*st,Y=H-it*st,nt=gt*_t-Y*xt,pt=St*Y-ft*gt,Pt=xt*ft-_t*St;if(s){if(nt<0||pt<0||Pt<0)return null}else if((nt<0||pt<0||Pt<0)&&(nt>0||pt>0||Pt>0))return null;let dt=nt+pt+Pt;if(dt===0)return null;let Lt=rt*(nt*q+pt*I+Pt*st);return(dt>0?Lt<0:Lt>0)?null:this.at(Lt/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},En=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},bh=new Ce,Ii=new Ks,kr=new Di,wh=new $,Vr=new $,Gr=new $,Hr=new $,vl=new $,Wr=new $,Eh=new $,Xr=new $,Le=class extends sn{constructor(t=new Qe,e=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let f=o[c],h=r[c];f!==0&&(vl.fromBufferAttribute(h,t),a?Wr.addScaledVector(vl,f):Wr.addScaledVector(vl.sub(e),f))}e.add(Wr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(kr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(kr,wh)===null||Ii.origin.distanceToSquared(wh)>(t.far-t.near)**2))&&(bh.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(bh),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],A=Math.max(m.start,d.start),L=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=A,T=L;b<T;b+=3){let w=o.getX(b),C=o.getX(b+1),_=o.getX(b+2);s=qr(this,p,t,i,l,f,h,w,C,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let A=o.getX(m),L=o.getX(m+1),b=o.getX(m+2);s=qr(this,a,t,i,l,f,h,A,L,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],A=Math.max(m.start,d.start),L=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=A,T=L;b<T;b+=3){let w=b,C=b+1,_=b+2;s=qr(this,p,t,i,l,f,h,w,C,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let A=m,L=m+1,b=m+2;s=qr(this,a,t,i,l,f,h,A,L,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function md(n,t,e,i,s,r,a,o){let c;if(t.side===tn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===xi,o),c===null)return null;Xr.copy(o),Xr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Xr);return l<e.near||l>e.far?null:{distance:l,point:Xr.clone(),object:n}}function qr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Vr),n.getVertexPosition(c,Gr),n.getVertexPosition(l,Hr);let f=md(n,t,e,i,Vr,Gr,Hr,Eh);if(f){let h=new $;Fn.getBarycoord(Eh,Vr,Gr,Hr,h),s&&(f.uv=Fn.getInterpolatedAttribute(s,o,c,l,h,new ce)),r&&(f.uv1=Fn.getInterpolatedAttribute(r,o,c,l,h,new ce)),a&&(f.normal=Fn.getInterpolatedAttribute(a,o,c,l,h,new $),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new $,materialIndex:0};Fn.getNormal(Vr,Gr,Hr,u.normal),f.face=u,f.barycoord=h}return f}var ya=class extends Ge{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Ve,f=Ve,h,u){super(null,a,o,c,l,f,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=new Di,gd=new ce(.5,.5),Yr=new $,js=class{constructor(t=new Sn,e=new Sn,i=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],f=r[4],h=r[5],u=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],A=r[12],L=r[13],b=r[14],T=r[15];if(s[0].setComponents(l-a,d-f,p-g,T-A).normalize(),s[1].setComponents(l+a,d+f,p+g,T+A).normalize(),s[2].setComponents(l+o,d+h,p+v,T+L).normalize(),s[3].setComponents(l-o,d-h,p-v,T-L).normalize(),i)s[4].setComponents(c,u,m,b).normalize(),s[5].setComponents(l-c,d-u,p-m,T-b).normalize();else if(s[4].setComponents(l-c,d-u,p-m,T-b).normalize(),e===bn)s[5].setComponents(l+c,d+u,p+m,T+b).normalize();else if(e===Gs)s[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);let e=gd.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ms=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},va=new $,Ma=new $,Th=new Ce,Bs=new Ks,$r=new Di,Ml=new $,Ah=new $,Sa=class extends sn{constructor(t=new Qe,e=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)va.fromBufferAttribute(e,s-1),Ma.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=va.distanceTo(Ma);t.setAttribute("lineDistance",new je(i,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;Th.copy(s).invert(),Bs.copy(t.ray).applyMatrix4(Th);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){let p=f.getX(v),A=f.getX(v+1),L=Zr(this,t,Bs,c,p,A,v);L&&e.push(L)}if(this.isLineLoop){let v=f.getX(g-1),m=f.getX(d),p=Zr(this,t,Bs,c,v,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=d,m=g-1;v<m;v+=l){let p=Zr(this,t,Bs,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=Zr(this,t,Bs,c,g-1,d,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zr(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(va.fromBufferAttribute(o,s),Ma.fromBufferAttribute(o,r),e.distanceSqToSegment(va,Ma,Ml,Ah)>i)return;Ml.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Ml);if(!(l<t.near||l>t.far))return{distance:l,point:Ah.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ch=new $,Rh=new $,Qs=class extends Sa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ch.fromBufferAttribute(e,s),Rh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ch.distanceTo(Rh);t.setAttribute("lineDistance",new je(i,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tr=class extends Ge{constructor(t=[],e=yi,i,s,r,a,o,c,l,f){super(t,e,i,s,r,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vn=class extends Ge{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends Ge{constructor(t,e,i=An,s,r,a,o=Ve,c=Ve,l,f=Bn,h=1){if(f!==Bn&&f!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,s,r,a,o,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ba=class extends pi{constructor(t,e=An,i=yi,s,r,a=Ve,o=Ve,c,l=Bn){let f={width:t,height:t,depth:1},h=[f,f,f,f,f,f];super(t,t,e,i,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},er=class extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},un=class n extends Qe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],f=[],h=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(h,2));function g(v,m,p,A,L,b,T,w,C,_,E){let N=b/C,V=T/_,q=b/2,U=T/2,P=w/2,I=C+1,J=_+1,H=0,st=0,Z=new $;for(let it=0;it<J;it++){let rt=it*V-U;for(let St=0;St<I;St++){let ft=St*N-q;Z[v]=ft*A,Z[m]=rt*L,Z[p]=P,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[p]=w>0?1:-1,f.push(Z.x,Z.y,Z.z),h.push(St/C),h.push(1-it/_),H+=1}}for(let it=0;it<_;it++)for(let rt=0;rt<C;rt++){let St=u+rt+I*it,ft=u+rt+I*(it+1),xt=u+(rt+1)+I*(it+1),_t=u+(rt+1)+I*it;c.push(St,ft,_t),c.push(ft,xt,_t),st+=6}o.addGroup(d,st,E),d+=st,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Jr=new $,Kr=new $,Sl=new $,jr=new Fn,nr=class extends Qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ia*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],f=["a","b","c"],h=new Array(3),u={},d=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:v,b:m,c:p}=jr;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),jr.getNormal(Sl),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){let L=(A+1)%3,b=h[A],T=h[L],w=jr[f[A]],C=jr[f[L]],_=`${b}_${T}`,E=`${T}_${b}`;E in u&&u[E]?(Sl.dot(u[E].normal)<=r&&(d.push(w.x,w.y,w.z),d.push(C.x,C.y,C.z)),u[E]=null):_ in u||(u[_]={index0:l[A],index1:l[L],normal:Sl.clone()})}}for(let g in u)if(u[g]){let{index0:v,index1:m}=u[g];Jr.fromBufferAttribute(o,v),Kr.fromBufferAttribute(o,m),d.push(Jr.x,Jr.y,Jr.z),d.push(Kr.x,Kr.y,Kr.z)}this.setAttribute("position",new je(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ir=class n extends Qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,f=c+1,h=t/o,u=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<f;p++){let A=p*u-a;for(let L=0;L<l;L++){let b=L*h-r;g.push(b,-A,0),v.push(0,0,1),m.push(L/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<o;A++){let L=A+l*p,b=A+l*(p+1),T=A+1+l*(p+1),w=A+1+l*p;d.push(L,b,w),d.push(b,T,w)}this.setIndex(d),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Oi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Ih(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ih(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ze(n){let t={};for(let e=0;e<n.length;e++){let i=Oi(n[e]);for(let s in i)t[s]=i[s]}return t}function Ih(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function _d(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ec(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var yu={clone:Oi,merge:Ze},xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=_d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new $().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ce().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wa=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ea=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ta=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function os(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function bl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var mi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Aa=class extends mi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tl:r=t,o=2*e-i;break;case Al:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Tl:a=t,c=2*i-e;break;case Al:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,f=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,A=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,L=(-1-d)*m+(1.5+d)*v+.5*g,b=d*m-d*v;for(let T=0;T!==o;++T)r[T]=p*a[f+T]+A*a[l+T]+L*a[c+T]+b*a[h+T];return r}},Ca=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,f=(i-e)/(s-e),h=1-f;for(let u=0;u!==o;++u)r[u]=a[l+u]*h+a[c+u]*f;return r}},Ra=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ia=class extends mi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,f=this.inTangents,h=this.outTangents;if(!f||!h){let g=(i-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let v=a[l+g],m=a[c+g],p=d*u+g*2,A=h[p],L=h[p+1],b=t*u+g*2,T=f[b],w=f[b+1],C=Md(i,e,A,T,s);r[g]=vu(C,v,L,w,m)}return r}};function vu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function vd(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Md(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=vu(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=vd(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var fn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=os(e,this.TimeBufferType),this.values=os(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:os(t.times,Array),values:os(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),bl(t.settings)&&(i.settings={inTangents:os(t.settings.inTangents,Array),outTangents:os(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ia(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zs:e=this.InterpolantFactoryMethodDiscrete;break;case da:e=this.InterpolantFactoryMethodLinear;break;case ea:e=this.InterpolantFactoryMethodSmooth;break;case wl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Jt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return ea;case this.InterpolantFactoryMethodBezier:return wl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;bl(this.settings)&&(Ph(this.settings.inTangents,t),Ph(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(te("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(te("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){te("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){te("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Kf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){te("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ea,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],f=t[o+1];if(l!==f&&(o!==1||l!==t[0]))if(s)c=!0;else{let h=o*i,u=h-i,d=h+i;for(let g=0;g!==i;++g){let v=e[h+g];if(v!==e[u+g]||v!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[h+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,bl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ph(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=da;var gi=class extends fn{constructor(t,e,i){super(t,e,i)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=zs;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}};Pa.prototype.ValueTypeName="color";var La=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}};La.prototype.ValueTypeName="number";var Da=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let f=l+o;l!==f;l+=4)kn.slerpFlat(r,0,a,l-o,a,l,c);return r}},sr=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}};sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends fn{constructor(t,e,i){super(t,e,i)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=zs;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends fn{constructor(t,e,i,s){super(t,e,i,s)}};Na.prototype.ValueTypeName="vector";var Ua=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return l.push(f,h),this},this.removeHandler=function(f){let h=l.indexOf(f);return h!==-1&&l.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=l.length;h<u;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mu=new Ua,Fa=class{constructor(t){this.manager=t!==void 0?t:Mu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qr=new $,ta=new kn,Nn=new $,rr=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qr,ta,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,ta,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Qr,ta,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,ta,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new $,Lh=new ce,Dh=new ce,Ye=class extends rr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Lh,Dh),e.subVectors(Dh,Lh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ia*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ar=class extends rr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ls=-90,cs=1,Oa=class extends sn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(ls,cs,t,e);s.layers=this.layers,this.add(s);let r=new Ye(ls,cs,t,e);r.layers=this.layers,this.add(r);let a=new Ye(ls,cs,t,e);a.layers=this.layers,this.add(a);let o=new Ye(ls,cs,t,e);o.layers=this.layers,this.add(o);let c=new Ye(ls,cs,t,e);c.layers=this.layers,this.add(c);let l=new Ye(ls,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(h,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ba=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var nc="\\[\\]\\.:\\/",Sd=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",bd="[^"+nc.replace("\\.","")+"]",wd=/((?:WC+[\/:])*)/.source.replace("WC",ic),Ed=/(WCOD+)?/.source.replace("WCOD",bd),Td=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),Ad=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),Cd=new RegExp("^"+wd+Ed+Td+Ad+"$"),Rd=["material","materials","bones","map"],Cl=class{constructor(t,e,i){let s=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sd,"")}static parseTrackName(t){let e=Cd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Rd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===l){l=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;te("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Cl;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sx=new Float32Array(1);var cc=class cc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};cc.prototype.isMatrix2=!0;var Rl=cc;function sc(n,t,e,i){let s=Id(i);switch(e){case Zl:return n*t;case Kl:return n*t/s.components*s.byteLength;case qa:return n*t/s.components*s.byteLength;case Si:return n*t*2/s.components*s.byteLength;case Ya:return n*t*2/s.components*s.byteLength;case Jl:return n*t*3/s.components*s.byteLength;case gn:return n*t*4/s.components*s.byteLength;case $a:return n*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fr:case dr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:case ja:return Math.max(n,16)*Math.max(t,8)/4;case Za:case Ka:return Math.max(n,8)*Math.max(t,8)/2;case Qa:case to:case no:case io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case eo:case pr:case so:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case lo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ho:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case uo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case fo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case po:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case mo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case go:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case _o:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case yo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case vo:case Mo:case So:return Math.ceil(n/4)*Math.ceil(t/4)*16;case bo:case wo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case mr:case Eo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Id(n){switch(n){case dn:case Xl:return{byteLength:1,components:1};case xs:case ql:case Rn:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case An:case Ha:case Cn:return{byteLength:4,components:1};case Yl:case $l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ld(n){let t=new WeakMap;function e(o,c){let l=o.array,f=o.usage,h=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,f),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){let f=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,f);else{h.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<h.length;d++){let g=h[u],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,h[u]=v)}h.length=u+1;for(let d=0,g=h.length;d<g;d++){let v=h[d];n.bufferSubData(l,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
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
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vd=`#ifdef USE_BATCHING
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
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,np=`#define PI 3.141592653589793
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
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sp=`vec3 transformedNormal = objectNormal;
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
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ip=`PhysicalMaterial material;
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
#endif`,Pp=`uniform sampler2D dfgLUT;
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
}`,Lp=`
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hp=`#if defined( USE_POINTS_UV )
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
#endif`,Wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`#ifdef USE_MORPHTARGETS
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
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
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
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
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
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xm=`float getShadowMask() {
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
}`,ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`#include <common>
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
}`,km=`#if DEPTH_PACKING == 3200
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
}`,Vm=`#define DISTANCE
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
}`,Gm=`#define DISTANCE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,$m=`uniform vec3 diffuse;
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
}`,Zm=`#define LAMBERT
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
}`,Jm=`#define LAMBERT
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
}`,Km=`#define MATCAP
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
}`,jm=`#define MATCAP
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
}`,Qm=`#define NORMAL
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
}`,t0=`#define NORMAL
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
}`,e0=`#define PHONG
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
}`,n0=`#define PHONG
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
}`,i0=`#define STANDARD
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
}`,s0=`#define STANDARD
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
}`,r0=`#define TOON
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
}`,a0=`#define TOON
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
}`,o0=`uniform float size;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 color;
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
}`,u0=`uniform float rotation;
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
}`,f0=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Dd,alphahash_pars_fragment:Nd,alphamap_fragment:Ud,alphamap_pars_fragment:Fd,alphatest_fragment:Od,alphatest_pars_fragment:Bd,aomap_fragment:zd,aomap_pars_fragment:kd,batching_pars_vertex:Vd,batching_vertex:Gd,begin_vertex:Hd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:Kd,color_fragment:jd,color_pars_fragment:Qd,color_pars_vertex:tp,color_vertex:ep,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:ap,emissivemap_fragment:op,emissivemap_pars_fragment:lp,colorspace_fragment:cp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:fp,envmap_pars_fragment:dp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Ep,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:_p,fog_fragment:xp,fog_pars_fragment:yp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:Mp,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:bp,lights_pars_begin:wp,lights_toon_fragment:Tp,lights_toon_pars_fragment:Ap,lights_phong_fragment:Cp,lights_phong_pars_fragment:Rp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Pp,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Np,lightprobes_pars_fragment:Up,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:zp,map_fragment:kp,map_pars_fragment:Vp,map_particle_fragment:Gp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Wp,metalnessmap_pars_fragment:Xp,morphinstance_vertex:qp,morphcolor_vertex:Yp,morphnormal_vertex:$p,morphtarget_pars_vertex:Zp,morphtarget_vertex:Jp,normal_fragment_begin:Kp,normal_fragment_maps:jp,normal_pars_fragment:Qp,normal_pars_vertex:tm,normal_vertex:em,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:rm,iridescence_pars_fragment:am,opaque_fragment:om,packing:lm,premultiplied_alpha_fragment:cm,project_vertex:hm,dithering_fragment:um,dithering_pars_fragment:fm,roughnessmap_fragment:dm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:_m,shadowmask_pars_fragment:xm,skinbase_vertex:ym,skinning_pars_vertex:vm,skinning_vertex:Mm,skinnormal_vertex:Sm,specularmap_fragment:bm,specularmap_pars_fragment:wm,tonemapping_fragment:Em,tonemapping_pars_fragment:Tm,transmission_fragment:Am,transmission_pars_fragment:Cm,uv_pars_fragment:Rm,uv_pars_vertex:Im,uv_vertex:Pm,worldpos_vertex:Lm,background_vert:Dm,background_frag:Nm,backgroundCube_vert:Um,backgroundCube_frag:Fm,cube_vert:Om,cube_frag:Bm,depth_vert:zm,depth_frag:km,distance_vert:Vm,distance_frag:Gm,equirect_vert:Hm,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:qm,meshbasic_vert:Ym,meshbasic_frag:$m,meshlambert_vert:Zm,meshlambert_frag:Jm,meshmatcap_vert:Km,meshmatcap_frag:jm,meshnormal_vert:Qm,meshnormal_frag:t0,meshphong_vert:e0,meshphong_frag:n0,meshphysical_vert:i0,meshphysical_frag:s0,meshtoon_vert:r0,meshtoon_frag:a0,points_vert:o0,points_frag:l0,shadow_vert:c0,shadow_frag:h0,sprite_vert:u0,sprite_frag:f0},Dt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Wn={basic:{uniforms:Ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Ze([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Ze([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new se(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Ze([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Ze([Dt.points,Dt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Ze([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Ze([Dt.common,Dt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Ze([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Ze([Dt.sprite,Dt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:Ze([Dt.common,Dt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:Ze([Dt.lights,Dt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Wn.physical={uniforms:Ze([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Co={r:0,b:0,g:0},d0=new Ce,Wu=new ne;Wu.set(-1,0,0,0,1,0,0,0,1);function p0(n,t,e,i,s,r){let a=new se(0),o=s===!0?0:1,c,l,f=null,h=0,u=null;function d(A){let L=A.isScene===!0?A.background:null;if(L&&L.isTexture){let b=A.backgroundBlurriness>0;L=t.get(L,b)}return L}function g(A){let L=!1,b=d(A);b===null?m(a,o):b&&b.isColor&&(m(b,1),L=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(A,L){let b=d(L);b&&(b.isCubeTexture||b.mapping===lr)?(l===void 0&&(l=new Le(new un(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:Oi(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(L.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Wu),l.material.toneMapped=ue.getTransfer(b.colorSpace)!==xe,(f!==b||h!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=b,h=b.version,u=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Le(new ir(2,2),new $e({name:"BackgroundMaterial",uniforms:Oi(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=ue.getTransfer(b.colorSpace)!==xe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,u=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function m(A,L){A.getRGB(Co,ec(n)),e.buffers.color.setClear(Co.r,Co.g,Co.b,L,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,L=1){a.set(A),o=L,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(a,o)},render:g,addToRenderList:v,dispose:p}}function m0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(V,q,U,P,I){let J=!1,H=h(V,P,U,q);r!==H&&(r=H,l(r.object)),J=d(V,P,U,I),J&&g(V,P,U,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,b(V,q,U,P),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return n.createVertexArray()}function l(V){return n.bindVertexArray(V)}function f(V){return n.deleteVertexArray(V)}function h(V,q,U,P){let I=P.wireframe===!0,J=i[q.id];J===void 0&&(J={},i[q.id]=J);let H=V.isInstancedMesh===!0?V.id:0,st=J[H];st===void 0&&(st={},J[H]=st);let Z=st[U.id];Z===void 0&&(Z={},st[U.id]=Z);let it=Z[I];return it===void 0&&(it=u(c()),Z[I]=it),it}function u(V){let q=[],U=[],P=[];for(let I=0;I<e;I++)q[I]=0,U[I]=0,P[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:U,attributeDivisors:P,object:V,attributes:{},index:null}}function d(V,q,U,P){let I=r.attributes,J=q.attributes,H=0,st=U.getAttributes();for(let Z in st)if(st[Z].location>=0){let rt=I[Z],St=J[Z];if(St===void 0&&(Z==="instanceMatrix"&&V.instanceMatrix&&(St=V.instanceMatrix),Z==="instanceColor"&&V.instanceColor&&(St=V.instanceColor)),rt===void 0||rt.attribute!==St||St&&rt.data!==St.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(V,q,U,P){let I={},J=q.attributes,H=0,st=U.getAttributes();for(let Z in st)if(st[Z].location>=0){let rt=J[Z];rt===void 0&&(Z==="instanceMatrix"&&V.instanceMatrix&&(rt=V.instanceMatrix),Z==="instanceColor"&&V.instanceColor&&(rt=V.instanceColor));let St={};St.attribute=rt,rt&&rt.data&&(St.data=rt.data),I[Z]=St,H++}r.attributes=I,r.attributesNum=H,r.index=P}function v(){let V=r.newAttributes;for(let q=0,U=V.length;q<U;q++)V[q]=0}function m(V){p(V,0)}function p(V,q){let U=r.newAttributes,P=r.enabledAttributes,I=r.attributeDivisors;U[V]=1,P[V]===0&&(n.enableVertexAttribArray(V),P[V]=1),I[V]!==q&&(n.vertexAttribDivisor(V,q),I[V]=q)}function A(){let V=r.newAttributes,q=r.enabledAttributes;for(let U=0,P=q.length;U<P;U++)q[U]!==V[U]&&(n.disableVertexAttribArray(U),q[U]=0)}function L(V,q,U,P,I,J,H){H===!0?n.vertexAttribIPointer(V,q,U,I,J):n.vertexAttribPointer(V,q,U,P,I,J)}function b(V,q,U,P){v();let I=P.attributes,J=U.getAttributes(),H=q.defaultAttributeValues;for(let st in J){let Z=J[st];if(Z.location>=0){let it=I[st];if(it===void 0&&(st==="instanceMatrix"&&V.instanceMatrix&&(it=V.instanceMatrix),st==="instanceColor"&&V.instanceColor&&(it=V.instanceColor)),it!==void 0){let rt=it.normalized,St=it.itemSize,ft=t.get(it);if(ft===void 0)continue;let xt=ft.buffer,_t=ft.type,gt=ft.bytesPerElement,Y=_t===n.INT||_t===n.UNSIGNED_INT||it.gpuType===Ha;if(it.isInterleavedBufferAttribute){let nt=it.data,pt=nt.stride,Pt=it.offset;if(nt.isInstancedInterleavedBuffer){for(let dt=0;dt<Z.locationSize;dt++)p(Z.location+dt,nt.meshPerAttribute);V.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let dt=0;dt<Z.locationSize;dt++)m(Z.location+dt);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let dt=0;dt<Z.locationSize;dt++)L(Z.location+dt,St/Z.locationSize,_t,rt,pt*gt,(Pt+St/Z.locationSize*dt)*gt,Y)}else{if(it.isInstancedBufferAttribute){for(let nt=0;nt<Z.locationSize;nt++)p(Z.location+nt,it.meshPerAttribute);V.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let nt=0;nt<Z.locationSize;nt++)m(Z.location+nt);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let nt=0;nt<Z.locationSize;nt++)L(Z.location+nt,St/Z.locationSize,_t,rt,St*gt,St/Z.locationSize*nt*gt,Y)}}else if(H!==void 0){let rt=H[st];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(Z.location,rt);break;case 3:n.vertexAttrib3fv(Z.location,rt);break;case 4:n.vertexAttrib4fv(Z.location,rt);break;default:n.vertexAttrib1fv(Z.location,rt)}}}}A()}function T(){E();for(let V in i){let q=i[V];for(let U in q){let P=q[U];for(let I in P){let J=P[I];for(let H in J)f(J[H].object),delete J[H];delete P[I]}}delete i[V]}}function w(V){if(i[V.id]===void 0)return;let q=i[V.id];for(let U in q){let P=q[U];for(let I in P){let J=P[I];for(let H in J)f(J[H].object),delete J[H];delete P[I]}}delete i[V.id]}function C(V){for(let q in i){let U=i[q];for(let P in U){let I=U[P];if(I[V.id]===void 0)continue;let J=I[V.id];for(let H in J)f(J[H].object),delete J[H];delete I[V.id]}}}function _(V){for(let q in i){let U=i[q],P=V.isInstancedMesh===!0?V.id:0,I=U[P];if(I!==void 0){for(let J in I){let H=I[J];for(let st in H)f(H[st].object),delete H[st];delete I[J]}delete U[P],Object.keys(U).length===0&&delete i[q]}}}function E(){N(),a=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function g0(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,f){f!==0&&(n.drawArraysInstanced(i,c,l,f),e.update(l,i,f))}function o(c,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,f);let u=0;for(let d=0;d<f;d++)u+=l[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==gn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===Rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==dn&&C!==Cn&&!_&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",f=c(l);f!==l&&(Jt("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:L,maxFragmentUniforms:b,maxSamples:T,samples:w}}function x0(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Sn,o=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||s;return s=u,i=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,d){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?f(null):l();else{let A=r?0:i,L=A*4,b=p.clippingState||null;c.value=b,b=f(g,u,L,d);for(let T=0;T!==L;++T)b[T]=e[T];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,u,d,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let L=0,b=d;L!==v;++L,b+=4)a.copy(h[L]).applyMatrix4(A,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Ms=4,y0=6,v0=20,M0=256,gr=new ar,Su=new se,hc=null,uc=0,fc=0,dc=!1,S0=new $,Bi=new $,Io=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=S0}=r;hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hc,uc,fc),this._renderer.xr.enabled=dc,t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Rn,format:gn,colorSpace:ks,depthBuffer:!1},s=bu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=b0(r)),this._blurMaterial=E0(r,t,e),this._ggxMaterial=w0(r,t,e)}return s}_compileMaterial(t){let e=new Le(new Qe,t);this._renderer.compile(e,gr)}_sceneToCubeUV(t,e,i,s,r){let c=new Ye(90,1,e,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Su),h.toneMapping=Tn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new un,new En({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,A=t.background;A?A.isColor&&(m.color.copy(A),t.background=null,p=!0):(m.color.copy(Su),p=!0);for(let L=0;L<6;L++){let b=L%3;b===0?(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[L],r.y,r.z)):b===1?(c.up.set(0,0,l[L]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[L],r.z)):(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[L]));let T=this._cubeSize;vs(s,b*T,L>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(v,c),h.render(t,c)}h.toneMapping=d,h.autoClear=u,t.background=A}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===yi||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;vs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,gr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-f*f),u=l*1.25,d=h*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Ms?i-g+Ms:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,vs(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,gr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,vs(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,gr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],h=3*f*(s>this._lodMax-Ms?s-this._lodMax+Ms:0),u=4*(this._cubeSize-f);vs(e,h,u,3*f,2*f),a.setRenderTarget(e),a.render(c,gr)}};function b0(n){let t=[],e=[],i=n,s=n-Ms+1+y0;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),c=-o,l=1+o,f=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,u=6,d=3,g=new Float32Array(d*u*h),v=new Float32Array(d*u*h);for(let p=0;p<h;p++){let A=p%3*2/3-1,L=p>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];g.set(b,d*u*p);for(let T=0;T<u;T++){let w=f[T*2]*2-1,C=f[T*2+1]*2-1;p===0?Bi.set(1,C,w):p===1?Bi.set(-w,1,-C):p===2?Bi.set(-w,C,1):p===3?Bi.set(-1,C,-w):p===4?Bi.set(-w,-1,C):Bi.set(w,C,-1),Bi.toArray(v,(p*u+T)*d)}}let m=new Qe;m.setAttribute("position",new Fe(g,d)),m.setAttribute("outputDirection",new Fe(v,d)),e.push(new Le(m,null)),i>Ms&&i--}return{lodMeshes:e,sizeLods:t}}function bu(n,t,e){let i=new nn(n,t,e);return i.texture.mapping=lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function w0(n,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Do(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function E0(n,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:v0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Do(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function wu(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Eu(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Do(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Po=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:Oi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Gn});r.uniforms.tEquirect.value=e;let a=new Le(s,r),o=e.minFilter;return e.minFilter===vi&&(e.minFilter=Ne),new Oa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function T0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===ka||d===Va)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new Po(g.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===ka||d===Va,v=d===yi||d===Fi;if(g||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Io(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let A=u.image;return g&&A&&A.height>0||v&&A&&c(A)?(i===null&&(i=new Io(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===ka?u.mapping=yi:d===Va&&(u.mapping=Fi),u}function c(u){let d=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&d++;return d===g}function l(u){let d=u.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function A0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Li("WebGLRenderer: "+i+" extension not supported."),s}}}function C0(n,t,e,i){let s={},r=new WeakMap;function a(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(h){let u=h.attributes;for(let d in u)t.update(u[d],n.ARRAY_BUFFER)}function l(h){let u=[],d=h.index,g=h.attributes.position,v=0;if(g===void 0)return;if(d!==null){let A=d.array;v=d.version;for(let L=0,b=A.length;L<b;L+=3){let T=A[L+0],w=A[L+1],C=A[L+2];u.push(T,w,w,C,C,T)}}else{let A=g.array;v=g.version;for(let L=0,b=A.length/3-1;L<b;L+=3){let T=L+0,w=L+1,C=L+2;u.push(T,w,w,C,C,T)}}let m=new(g.count>=65535?Zs:$s)(u,1);m.version=v;let p=r.get(h);p&&t.remove(p),r.set(h,m)}function f(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function R0(n,t,e){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,u){n.drawElements(i,u,r,h*a),e.update(u,i,1)}function l(h,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,h*a,d),e.update(u,i,d))}function f(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function I0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:te("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function P0(n,t,e){let i=new WeakMap,s=new Re;function r(a,o,c){let l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==h){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],L=0;d===!0&&(L=1),g===!0&&(L=2),v===!0&&(L=3);let b=o.attributes.position.count*L,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*T*4*h),C=new Xs(w,b,T,h);C.type=Cn,C.needsUpdate=!0;let _=L*4;for(let N=0;N<h;N++){let V=m[N],q=p[N],U=A[N],P=b*T*4*N;for(let I=0;I<V.count;I++){let J=I*_;d===!0&&(s.fromBufferAttribute(V,I),w[P+J+0]=s.x,w[P+J+1]=s.y,w[P+J+2]=s.z,w[P+J+3]=0),g===!0&&(s.fromBufferAttribute(q,I),w[P+J+4]=s.x,w[P+J+5]=s.y,w[P+J+6]=s.z,w[P+J+7]=0),v===!0&&(s.fromBufferAttribute(U,I),w[P+J+8]=s.x,w[P+J+9]=s.y,w[P+J+10]=s.z,w[P+J+11]=U.itemSize===4?s.w:1)}}u={count:h,texture:C,size:new ce(b,T)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function L0(n,t,e,i,s){let r=new WeakMap;function a(l){let f=s.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==f&&(t.update(u),r.set(u,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function o(){r=new WeakMap}function c(l){let f=l.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}var D0={[Ol]:"LINEAR_TONE_MAPPING",[Bl]:"REINHARD_TONE_MAPPING",[zl]:"CINEON_TONE_MAPPING",[kl]:"ACES_FILMIC_TONE_MAPPING",[Gl]:"AGX_TONE_MAPPING",[Hl]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function N0(n,t,e,i,s,r){let a=new nn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Qe;l.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new je([0,2,0,0,2,0],2));let f=new wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Le(l,f),u=new ar(-1,1,1,-1,0,1),d=null,g=null,v=!1,m,p=null,A=[],L=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),c!==null&&c.setSize(b,T);for(let w=0;w<A.length;w++){let C=A[w];C.setSize&&C.setSize(b,T)}},this.setEffects=function(b){A=b,L=A.length>0&&A[0].isRenderPass===!0;let T=a.width,w=a.height;A.length>0&&o===null&&(o=new nn(T,w,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),c=new nn(T,w,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<A.length;C++){let _=A[C];_.setSize&&_.setSize(T,w)}},this.begin=function(b,T){if(v||b.toneMapping===Tn&&A.length===0)return!1;if(p=T,T!==null){let w=T.width,C=T.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return L===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Tn,!0},this.hasRenderPass=function(){return L},this.end=function(b,T){b.toneMapping=m,v=!0;let w=a,C=o;for(let _=0;_<A.length;_++){let E=A[_];E.enabled!==!1&&(E.render(b,C,w,T),E.needsSwap!==!1&&(w=C,C=C===o?c:o))}if(d!==b.outputColorSpace||g!==b.toneMapping){d=b.outputColorSpace,g=b.toneMapping,f.defines={},ue.getTransfer(d)===xe&&(f.defines.SRGB_TRANSFER="");let _=D0[g];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(p),b.render(h,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),f.dispose()}}var Xu=new Ge,gc=new pi(1,1),qu=new Xs,Yu=new _a,$u=new tr,Tu=[],Au=[],Cu=new Float32Array(16),Ru=new Float32Array(9),Iu=new Float32Array(4);function bs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function No(n,t){let e=Au[t];e===void 0&&(e=new Int32Array(t),Au[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function U0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function F0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function O0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function B0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function z0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Iu.set(i),n.uniformMatrix2fv(this.addr,!1,Iu),Be(e,i)}}function k0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Ru.set(i),n.uniformMatrix3fv(this.addr,!1,Ru),Be(e,i)}}function V0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),Be(e,i)}}function G0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function H0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function W0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function X0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function q0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Y0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function $0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function Z0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function J0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gc.compareFunction=e.isReversedDepthBuffer()?Ao:To,r=gc):r=Xu,e.setTexture2D(t||r,s)}function K0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yu,s)}function j0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||$u,s)}function Q0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qu,s)}function tg(n){switch(n){case 5126:return U0;case 35664:return F0;case 35665:return O0;case 35666:return B0;case 35674:return z0;case 35675:return k0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return H0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return Y0;case 36295:return $0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return Q0}}function eg(n,t){n.uniform1fv(this.addr,t)}function ng(n,t){let e=bs(t,this.size,2);n.uniform2fv(this.addr,e)}function ig(n,t){let e=bs(t,this.size,3);n.uniform3fv(this.addr,e)}function sg(n,t){let e=bs(t,this.size,4);n.uniform4fv(this.addr,e)}function rg(n,t){let e=bs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ag(n,t){let e=bs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function og(n,t){let e=bs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function lg(n,t){n.uniform1iv(this.addr,t)}function cg(n,t){n.uniform2iv(this.addr,t)}function hg(n,t){n.uniform3iv(this.addr,t)}function ug(n,t){n.uniform4iv(this.addr,t)}function fg(n,t){n.uniform1uiv(this.addr,t)}function dg(n,t){n.uniform2uiv(this.addr,t)}function pg(n,t){n.uniform3uiv(this.addr,t)}function mg(n,t){n.uniform4uiv(this.addr,t)}function gg(n,t,e){let i=this.cache,s=t.length,r=No(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=gc:a=Xu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function _g(n,t,e){let i=this.cache,s=t.length,r=No(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yu,r[a])}function xg(n,t,e){let i=this.cache,s=t.length,r=No(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$u,r[a])}function yg(n,t,e){let i=this.cache,s=t.length,r=No(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qu,r[a])}function vg(n){switch(n){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return fg;case 36294:return dg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return yg}}var _c=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=tg(e.type)}},xc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vg(e.type)}},yc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},pc=/(\w+)(\])?(\[|\.)?/g;function Pu(n,t){n.seq.push(t),n.map[t.id]=t}function Mg(n,t,e){let i=n.name,s=i.length;for(pc.lastIndex=0;;){let r=pc.exec(i),a=pc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Pu(e,l===void 0?new _c(o,n,t):new xc(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new yc(o),Pu(e,h)),e=h}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Mg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Lu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Sg=37297,bg=0;function wg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Du=new ne;function Eg(n){ue._getMatrix(Du,ue.workingColorSpace,n);let t=`mat3( ${Du.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case Vs:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+wg(n.getShaderSource(t),o)}else return r}function Tg(n,t){let e=Eg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ag={[Ol]:"Linear",[Bl]:"Reinhard",[zl]:"Cineon",[kl]:"ACESFilmic",[Gl]:"AgX",[Hl]:"Neutral",[Vl]:"Custom"};function Cg(n,t){let e=Ag[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ro=new $;function Rg(){ue.getLuminanceCoefficients(Ro);let n=Ro.x.toFixed(4),t=Ro.y.toFixed(4),e=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ig(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Pg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Lg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function xr(n){return n!==""}function Uu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(n){return n.replace(Dg,Ug)}var Ng=new Map;function Ug(n,t){let e=ae[t];if(e===void 0){let i=Ng.get(t);if(i!==void 0)e=ae[i],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vc(e)}var Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(n){return n.replace(Fg,Og)}function Og(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Bg={[or]:"SHADOWMAP_TYPE_PCF",[gs]:"SHADOWMAP_TYPE_VSM"};function zg(n){return Bg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kg={[yi]:"ENVMAP_TYPE_CUBE",[Fi]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE_UV"};function Vg(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Gg={[Fi]:"ENVMAP_MODE_REFRACTION"};function Hg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Gg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wg={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[eu]:"ENVMAP_BLENDING_MIX",[nu]:"ENVMAP_BLENDING_ADD"};function Xg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Wg[n.combine]||"ENVMAP_BLENDING_NONE"}function qg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Yg(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=zg(e),l=Vg(e),f=Hg(e),h=Xg(e),u=qg(e),d=Ig(e),g=Pg(r),v=s.createProgram(),m,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Cg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Tg("linearToOutputTexel",e.outputColorSpace),Rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),a=vc(a),a=Uu(a,e),a=Fu(a,e),o=vc(o),o=Uu(o,e),o=Fu(o,e),a=Ou(a),o=Ou(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let L=A+m+a,b=A+p+o,T=Lu(s,s.VERTEX_SHADER,L),w=Lu(s,s.FRAGMENT_SHADER,b);s.attachShader(v,T),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(V){if(n.debug.checkShaderErrors){let q=s.getProgramInfoLog(v)||"",U=s.getShaderInfoLog(T)||"",P=s.getShaderInfoLog(w)||"",I=q.trim(),J=U.trim(),H=P.trim(),st=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,T,w);else{let it=Nu(s,T,"vertex"),rt=Nu(s,w,"fragment");te("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+I+`
`+it+`
`+rt)}else I!==""?Jt("WebGLProgram: Program Info Log:",I):(J===""||H==="")&&(Z=!1);Z&&(V.diagnostics={runnable:st,programLog:I,vertexShader:{log:J,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(T),s.deleteShader(w),_=new Ss(s,v),E=Lg(s,v)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,Sg)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}var $g=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sc(t),e.set(t,i)),i}},Sc=class{constructor(t){this.id=$g++,this.code=t,this.usedTimes=0}};function Zg(n){return n===Si||n===pr||n===mr}function Jg(n,t,e,i,s,r){let a=new qs,o=new Mc,c=new Set,l=[],f=new Map,h=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,E,N,V,q,U){let P=V.fog,I=q.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?V.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,st=t.get(_.envMap||J,H),Z=st&&st.mapping===lr?st.image.height:null,it=d[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Jt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let rt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,St=rt!==void 0?rt.length:0,ft=0;I.morphAttributes.position!==void 0&&(ft=1),I.morphAttributes.normal!==void 0&&(ft=2),I.morphAttributes.color!==void 0&&(ft=3);let xt,_t,gt,Y;if(it){let ye=Wn[it];xt=ye.vertexShader,_t=ye.fragmentShader}else{xt=_.vertexShader,_t=_.fragmentShader;let ye=o.getVertexShaderStage(_),me=o.getFragmentShaderStage(_);o.update(_,ye,me),gt=ye.id,Y=me.id}let nt=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Pt=q.isInstancedMesh===!0,dt=q.isBatchedMesh===!0,Lt=!!_.map,Kt=!!_.matcap,Ot=!!st,Wt=!!_.aoMap,ie=!!_.lightMap,Vt=!!_.bumpMap&&_.wireframe===!1,ee=!!_.normalMap,we=!!_.displacementMap,Te=!!_.emissiveMap,pe=!!_.metalnessMap,ve=!!_.roughnessMap,z=_.anisotropy>0,Ie=_.clearcoat>0,he=_.dispersion>0,R=_.retroreflectivity>0,x=_.iridescence>0,W=_.sheen>0,O=_.transmission>0,Q=z&&!!_.anisotropyMap,yt=Ie&&!!_.clearcoatMap,bt=Ie&&!!_.clearcoatNormalMap,at=Ie&&!!_.clearcoatRoughnessMap,ct=x&&!!_.iridescenceMap,Et=x&&!!_.iridescenceThicknessMap,Xt=W&&!!_.sheenColorMap,vt=W&&!!_.sheenRoughnessMap,wt=!!_.specularMap,qt=!!_.specularColorMap,Zt=!!_.specularIntensityMap,Qt=O&&!!_.transmissionMap,k=O&&!!_.thicknessMap,Tt=!!_.gradientMap,lt=!!_.alphaMap,At=_.alphaTest>0,Rt=!!_.alphaHash,ut=!!_.extensions,Yt=Tn;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Yt=n.toneMapping);let Gt={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:xt,fragmentShader:_t,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:dt,batchingColor:dt&&q._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&q.instanceColor!==null,instancingMorph:Pt&&q.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Lt,matcap:Kt,envMap:Ot,envMapMode:Ot&&st.mapping,envMapCubeUVHeight:Z,aoMap:Wt,lightMap:ie,bumpMap:Vt,normalMap:ee,displacementMap:we,emissiveMap:Te,normalMapObjectSpace:ee&&_.normalMapType===ru,normalMapTangentSpace:ee&&_.normalMapType===jl,packedNormalMap:ee&&_.normalMapType===jl&&Zg(_.normalMap.format),metalnessMap:pe,roughnessMap:ve,anisotropy:z,anisotropyMap:Q,clearcoat:Ie,clearcoatMap:yt,clearcoatNormalMap:bt,clearcoatRoughnessMap:at,dispersion:he,retroreflection:R,iridescence:x,iridescenceMap:ct,iridescenceThicknessMap:Et,sheen:W,sheenColorMap:Xt,sheenRoughnessMap:vt,specularMap:wt,specularColorMap:qt,specularIntensityMap:Zt,transmission:O,transmissionMap:Qt,thicknessMap:k,gradientMap:Tt,opaque:_.transparent===!1&&_.blending===_s&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:At,alphaHash:Rt,combine:_.combine,mapUv:Lt&&g(_.map.channel),aoMapUv:Wt&&g(_.aoMap.channel),lightMapUv:ie&&g(_.lightMap.channel),bumpMapUv:Vt&&g(_.bumpMap.channel),normalMapUv:ee&&g(_.normalMap.channel),displacementMapUv:we&&g(_.displacementMap.channel),emissiveMapUv:Te&&g(_.emissiveMap.channel),metalnessMapUv:pe&&g(_.metalnessMap.channel),roughnessMapUv:ve&&g(_.roughnessMap.channel),anisotropyMapUv:Q&&g(_.anisotropyMap.channel),clearcoatMapUv:yt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:bt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(_.sheenRoughnessMap.channel),specularMapUv:wt&&g(_.specularMap.channel),specularColorMapUv:qt&&g(_.specularColorMap.channel),specularIntensityMapUv:Zt&&g(_.specularIntensityMap.channel),transmissionMapUv:Qt&&g(_.transmissionMap.channel),thicknessMapUv:k&&g(_.thicknessMap.channel),alphaMapUv:lt&&g(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ee||z),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!I.attributes.uv&&(Lt||lt),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:ft,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Lt&&_.map.isVideoTexture===!0&&ue.getTransfer(_.map.colorSpace)===xe,decodeVideoTextureEmissive:Te&&_.emissiveMap.isVideoTexture===!0&&ue.getTransfer(_.emissiveMap.colorSpace)===xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mn,flipSided:_.side===tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ut&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&_.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)E.push(N),E.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(E,_),A(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function A(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function L(_){let E=d[_.type],N;if(E){let V=Wn[E];N=yu.clone(V.uniforms)}else N=_.uniforms;return N}function b(_,E){let N=f.get(E);return N!==void 0?++N.usedTimes:(N=new Yg(n,E,_,s),l.push(N),f.set(E,N)),N}function T(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),f.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:L,acquireProgram:b,releaseProgram:T,releaseShaderCache:w,programs:l,dispose:C}}function Kg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function jg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function zu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ku(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,v,m,p){let A=n[t];return A===void 0?(A={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[t]=A):(A.id=u.id,A.object=u,A.geometry=d,A.material=g,A.materialVariant=a(u),A.groupOrder=v,A.renderOrder=u.renderOrder,A.z=m,A.group=p),t++,A}function c(u,d,g,v,m,p,A){A.reversedDepth===!0&&(m=-m);let L=o(u,d,g,v,m,p);g.transmission>0?i.push(L):g.transparent===!0?s.push(L):e.push(L)}function l(u,d,g,v,m,p){let A=o(u,d,g,v,m,p);g.transmission>0?i.unshift(A):g.transparent===!0?s.unshift(A):e.unshift(A)}function f(u,d){e.length>1&&e.sort(u||jg),i.length>1&&i.sort(d||zu),s.length>1&&s.sort(d||zu)}function h(){for(let u=t,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:f}}function Qg(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new ku,n.set(i,[a])):s>=r.length?(a=new ku,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function t_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new se};break;case"SpotLight":e={position:new $,direction:new $,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function e_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var n_=0;function i_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function s_(n){let t=new t_,e=e_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);let s=new $,r=new Ce,a=new Ce;function o(l){let f=0,h=0,u=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,A=0,L=0,b=0,T=0,w=0,C=0,_=0,E=0,N=0;l.sort(i_);for(let q=0,U=l.length;q<U;q++){let P=l[q],I=P.color,J=P.intensity,H=P.distance,st=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Si?st=P.shadow.map.texture:st=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=I.r*J,h+=I.g*J,u+=I.b*J;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],J);N++}else if(P.isSunLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let it=P.shadow,rt=e.get(P);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[g]=rt,i.sunShadowMap[g]=st;let St=it.getViewportCount();for(let ft=0;ft<St;ft++)i.sunShadowMatrix[v+ft]=it.getMatrix(ft),i.sunShadowCascade[v+ft]=it._cascadeData[ft];v+=St,g++}i.sun[d]=Z,d++}else if(P.isDirectionalLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let it=P.shadow,rt=e.get(P);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,i.directionalShadow[m]=rt,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=P.shadow.matrix,T++}i.directional[m]=Z,m++}else if(P.isSpotLight){let Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(I).multiplyScalar(J),Z.distance=H,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[A]=Z;let it=P.shadow;if(P.map&&(i.spotLightMap[_]=P.map,_++,it.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[A]=it.matrix,P.castShadow){let rt=e.get(P);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,i.spotShadow[A]=rt,i.spotShadowMap[A]=st,C++}A++}else if(P.isRectAreaLight){let Z=t.get(P);Z.color.copy(I).multiplyScalar(J),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[L]=Z,L++}else if(P.isPointLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let it=P.shadow,rt=e.get(P);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,rt.shadowCameraNear=it.camera.near,rt.shadowCameraFar=it.camera.far,i.pointShadow[p]=rt,i.pointShadowMap[p]=st,i.pointShadowMatrix[p]=P.shadow.matrix,w++}i.point[p]=Z,p++}else if(P.isHemisphereLight){let Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(J),Z.groundColor.copy(P.groundColor).multiplyScalar(J),i.hemi[b]=Z,b++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;let V=i.hash;(V.sunLength!==d||V.directionalLength!==m||V.pointLength!==p||V.spotLength!==A||V.rectAreaLength!==L||V.hemiLength!==b||V.numSunShadows!==g||V.numDirectionalShadows!==T||V.numPointShadows!==w||V.numSpotShadows!==C||V.numSpotMaps!==_||V.numLightProbes!==N)&&(i.sun.length=d,i.directional.length=m,i.spot.length=A,i.rectArea.length=L,i.point.length=p,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=N,V.sunLength=d,V.directionalLength=m,V.pointLength=p,V.spotLength=A,V.rectAreaLength=L,V.hemiLength=b,V.numSunShadows=g,V.numDirectionalShadows=T,V.numPointShadows=w,V.numSpotShadows=C,V.numSpotMaps=_,V.numLightProbes=N,i.version=n_++)}function c(l,f){let h=0,u=0,d=0,g=0,v=0,m=0,p=f.matrixWorldInverse;for(let A=0,L=l.length;A<L;A++){let b=l[A];if(b.isSunLight){let T=i.sun[h];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),h++}else if(b.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(b.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let T=i.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function Vu(n){let t=new s_(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function f(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function r_(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Vu(n),t.set(s,[o])):r>=a.length?(o=new Vu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
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
}`,l_=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],c_=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Gu=new Ce,_r=new $,mc=new $;function h_(n,t,e){let i=new js,s=new ce,r=new ce,a=new Re,o=new Ea,c=new Ta,l={},f=e.maxTextureSize,h={[xi]:tn,[tn]:xi,[mn]:mn},u=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:a_,fragmentShader:o_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Qe;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Le(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let p=this.type;this.render=function(w,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Fh&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=or);let E=n.getRenderTarget(),N=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Gn),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let U=p!==this.type;U&&C.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(I=>I.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,I=w.length;P<I;P++){let J=w[P],H=J.shadow;if(H===void 0){Jt("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let st=H.getFrameExtents();s.multiply(st),r.copy(H.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/st.y),s.y=r.y*st.y,H.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Z,H.map===null||U===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===gs){if(J.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new nn(s.x,s.y,{format:Si,type:Rn,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),H.map.texture.name=J.name+".shadowMap",H.map.depthTexture=new pi(s.x,s.y,Cn),H.map.depthTexture.name=J.name+".shadowMapDepth",H.map.depthTexture.format=Bn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ve,H.map.depthTexture.magFilter=Ve}else J.isPointLight?(H.map=new Po(s.x),H.map.depthTexture=new ba(s.x,An)):(H.map=new nn(s.x,s.y),H.map.depthTexture=new pi(s.x,s.y,An)),H.map.depthTexture.name=J.name+".shadowMap",H.map.depthTexture.format=Bn,this.type===or?(H.map.depthTexture.compareFunction=Z?Ao:To,H.map.depthTexture.minFilter=Ne,H.map.depthTexture.magFilter=Ne):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ve,H.map.depthTexture.magFilter=Ve);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let it=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();J.isPointLight!==!0&&H.updateMatrices(J,_);for(let rt=0;rt<it;rt++){let St=H.getCamera(rt);if(J.isPointLight){let ft=H.camera,xt=H.matrix,_t=J.distance||ft.far;_t!==ft.far&&(ft.far=_t,ft.updateProjectionMatrix()),_r.setFromMatrixPosition(J.matrixWorld),ft.position.copy(_r),mc.copy(ft.position),mc.add(l_[rt]),ft.up.copy(c_[rt]),ft.lookAt(mc),ft.updateMatrixWorld(),xt.makeTranslation(-_r.x,-_r.y,-_r.z),Gu.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Gu,ft.coordinateSystem,ft.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,rt),n.clear();else{rt===0&&(n.setRenderTarget(H.map),n.clear());let ft=H.getViewport(rt);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),q.viewport(a)}i=H.getFrustum(rt),b(C,_,St,J,this.type)}H.isPointLightShadow!==!0&&this.type===gs&&A(H,_),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,N,V)};function A(w,C){let _=t.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new nn(s.x,s.y,{format:Si,type:Rn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,_,u,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,_,d,v,null)}function L(w,C,_,E){let N=null,V=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(V!==void 0)N=V;else if(N=_.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let q=N.uuid,U=C.uuid,P=l[q];P===void 0&&(P={},l[q]=P);let I=P[U];I===void 0&&(I=N.clone(),P[U]=I,C.addEventListener("dispose",T)),N=I}if(N.visible=C.visible,N.wireframe=C.wireframe,E===gs?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:h[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let q=n.properties.get(N);q.light=_}return N}function b(w,C,_,E,N){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===gs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let U=t.update(w),P=w.material;if(Array.isArray(P)){let I=U.groups;for(let J=0,H=I.length;J<H;J++){let st=I[J],Z=P[st.materialIndex];if(Z&&Z.visible){let it=L(w,Z,E,N);w.onBeforeShadow(n,w,C,_,U,it,st),n.renderBufferDirect(_,null,U,it,w,st),w.onAfterShadow(n,w,C,_,U,it,st)}}}else if(P.visible){let I=L(w,P,E,N);w.onBeforeShadow(n,w,C,_,U,I,null),n.renderBufferDirect(_,null,U,I,w,null),w.onAfterShadow(n,w,C,_,U,I,null)}}let q=w.children;for(let U=0,P=q.length;U<P;U++)b(q[U],C,_,E,N)}function T(w){w.target.removeEventListener("dispose",T);for(let _ in l){let E=l[_],N=w.target.uuid;N in E&&(E[N].dispose(),delete E[N])}}}function u_(n,t){function e(){let k=!1,Tt=new Re,lt=null,At=new Re(0,0,0,0);return{setMask:function(Rt){lt!==Rt&&!k&&(n.colorMask(Rt,Rt,Rt,Rt),lt=Rt)},setLocked:function(Rt){k=Rt},setClear:function(Rt,ut,Yt,Gt,ye){ye===!0&&(Rt*=Gt,ut*=Gt,Yt*=Gt),Tt.set(Rt,ut,Yt,Gt),At.equals(Tt)===!1&&(n.clearColor(Rt,ut,Yt,Gt),At.copy(Tt))},reset:function(){k=!1,lt=null,At.set(-1,0,0,0)}}}function i(){let k=!1,Tt=!1,lt=null,At=null,Rt=null;return{setReversed:function(ut){if(Tt!==ut){let Yt=t.get("EXT_clip_control");ut?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Tt=ut;let Gt=Rt;Rt=null,this.setClear(Gt)}},getReversed:function(){return Tt},setTest:function(ut){ut?nt(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(ut){lt!==ut&&!k&&(n.depthMask(ut),lt=ut)},setFunc:function(ut){if(Tt&&(ut=gu[ut]),At!==ut){switch(ut){case sa:n.depthFunc(n.NEVER);break;case ra:n.depthFunc(n.ALWAYS);break;case aa:n.depthFunc(n.LESS);break;case us:n.depthFunc(n.LEQUAL);break;case oa:n.depthFunc(n.EQUAL);break;case la:n.depthFunc(n.GEQUAL);break;case ca:n.depthFunc(n.GREATER);break;case ha:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}At=ut}},setLocked:function(ut){k=ut},setClear:function(ut){Rt!==ut&&(Rt=ut,Tt&&(ut=1-ut),n.clearDepth(ut))},reset:function(){k=!1,lt=null,At=null,Rt=null,Tt=!1}}}function s(){let k=!1,Tt=null,lt=null,At=null,Rt=null,ut=null,Yt=null,Gt=null,ye=null;return{setTest:function(me){k||(me?nt(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(me){Tt!==me&&!k&&(n.stencilMask(me),Tt=me)},setFunc:function(me,on,en){(lt!==me||At!==on||Rt!==en)&&(n.stencilFunc(me,on,en),lt=me,At=on,Rt=en)},setOp:function(me,on,en){(ut!==me||Yt!==on||Gt!==en)&&(n.stencilOp(me,on,en),ut=me,Yt=on,Gt=en)},setLocked:function(me){k=me},setClear:function(me){ye!==me&&(n.clearStencil(me),ye=me)},reset:function(){k=!1,Tt=null,lt=null,At=null,Rt=null,ut=null,Yt=null,Gt=null,ye=null}}}let r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap,f={},h={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,A=null,L=null,b=null,T=null,w=null,C=null,_=new se(0,0,0),E=0,N=!1,V=null,q=null,U=null,P=null,I=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,st=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=st>=1):Z.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=st>=2);let it=null,rt={},St=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),xt=new Re().fromArray(St),_t=new Re().fromArray(ft);function gt(k,Tt,lt,At){let Rt=new Uint8Array(4),ut=n.createTexture();n.bindTexture(k,ut),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<lt;Yt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Tt,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(Tt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return ut}let Y={};Y[n.TEXTURE_2D]=gt(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(n.DEPTH_TEST),a.setFunc(us),Vt(!1),ee(Il),nt(n.CULL_FACE),Wt(Gn);function nt(k){f[k]!==!0&&(n.enable(k),f[k]=!0)}function pt(k){f[k]!==!1&&(n.disable(k),f[k]=!1)}function Pt(k,Tt){return u[k]!==Tt?(n.bindFramebuffer(k,Tt),u[k]=Tt,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Tt),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Tt),!0):!1}function dt(k,Tt){let lt=g,At=!1;if(k){lt=d.get(Tt),lt===void 0&&(lt=[],d.set(Tt,lt));let Rt=k.textures;if(lt.length!==Rt.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Yt=Rt.length;ut<Yt;ut++)lt[ut]=n.COLOR_ATTACHMENT0+ut;lt.length=Rt.length,At=!0}}else lt[0]!==n.BACK&&(lt[0]=n.BACK,At=!0);At&&n.drawBuffers(lt)}function Lt(k){return v!==k?(n.useProgram(k),v=k,!0):!1}let Kt={[Ui]:n.FUNC_ADD,[Bh]:n.FUNC_SUBTRACT,[zh]:n.FUNC_REVERSE_SUBTRACT};Kt[kh]=n.MIN,Kt[Vh]=n.MAX;let Ot={[Gh]:n.ZERO,[Hh]:n.ONE,[Wh]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[Jh]:n.SRC_ALPHA_SATURATE,[$h]:n.DST_COLOR,[qh]:n.DST_ALPHA,[Xh]:n.ONE_MINUS_SRC_COLOR,[Ul]:n.ONE_MINUS_SRC_ALPHA,[Zh]:n.ONE_MINUS_DST_COLOR,[Yh]:n.ONE_MINUS_DST_ALPHA,[Kh]:n.CONSTANT_COLOR,[jh]:n.ONE_MINUS_CONSTANT_COLOR,[Qh]:n.CONSTANT_ALPHA,[tu]:n.ONE_MINUS_CONSTANT_ALPHA};function Wt(k,Tt,lt,At,Rt,ut,Yt,Gt,ye,me){if(k===Gn){m===!0&&(pt(n.BLEND),m=!1);return}if(m===!1&&(nt(n.BLEND),m=!0),k!==Oh){if(k!==p||me!==N){if((A!==Ui||T!==Ui)&&(n.blendEquation(n.FUNC_ADD),A=Ui,T=Ui),me)switch(k){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pl:n.blendFunc(n.ONE,n.ONE);break;case Ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:te("WebGLState: Invalid blending: ",k);break}else switch(k){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ll:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",k);break}L=null,b=null,w=null,C=null,_.set(0,0,0),E=0,p=k,N=me}return}Rt=Rt||Tt,ut=ut||lt,Yt=Yt||At,(Tt!==A||Rt!==T)&&(n.blendEquationSeparate(Kt[Tt],Kt[Rt]),A=Tt,T=Rt),(lt!==L||At!==b||ut!==w||Yt!==C)&&(n.blendFuncSeparate(Ot[lt],Ot[At],Ot[ut],Ot[Yt]),L=lt,b=At,w=ut,C=Yt),(Gt.equals(_)===!1||ye!==E)&&(n.blendColor(Gt.r,Gt.g,Gt.b,ye),_.copy(Gt),E=ye),p=k,N=!1}function ie(k,Tt){k.side===mn?pt(n.CULL_FACE):nt(n.CULL_FACE);let lt=k.side===tn;Tt&&(lt=!lt),Vt(lt),k.blending===_s&&k.transparent===!1?Wt(Gn):Wt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let At=k.stencilWrite;o.setTest(At),At&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Te(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(k){V!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),V=k)}function ee(k){k!==Nh?(nt(n.CULL_FACE),k!==q&&(k===Il?n.cullFace(n.BACK):k===Uh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),q=k}function we(k){k!==U&&(H&&n.lineWidth(k),U=k)}function Te(k,Tt,lt){k?(nt(n.POLYGON_OFFSET_FILL),(P!==Tt||I!==lt)&&(P=Tt,I=lt,a.getReversed()&&(Tt=-Tt),n.polygonOffset(Tt,lt))):pt(n.POLYGON_OFFSET_FILL)}function pe(k){k?nt(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function ve(k){k===void 0&&(k=n.TEXTURE0+J-1),it!==k&&(n.activeTexture(k),it=k)}function z(k,Tt,lt){lt===void 0&&(it===null?lt=n.TEXTURE0+J-1:lt=it);let At=rt[lt];At===void 0&&(At={type:void 0,texture:void 0},rt[lt]=At),(At.type!==k||At.texture!==Tt)&&(it!==lt&&(n.activeTexture(lt),it=lt),n.bindTexture(k,Tt||Y[k]),At.type=k,At.texture=Tt)}function Ie(){let k=rt[it];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function he(){try{n.compressedTexImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function x(){try{n.texSubImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function W(){try{n.texSubImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function O(){try{n.compressedTexSubImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function yt(){try{n.texStorage2D(...arguments)}catch(k){te("WebGLState:",k)}}function bt(){try{n.texStorage3D(...arguments)}catch(k){te("WebGLState:",k)}}function at(){try{n.texImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function ct(){try{n.texImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function Et(k){return h[k]!==void 0?h[k]:n.getParameter(k)}function Xt(k,Tt){h[k]!==Tt&&(n.pixelStorei(k,Tt),h[k]=Tt)}function vt(k){xt.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function wt(k){_t.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),_t.copy(k))}function qt(k,Tt){let lt=l.get(Tt);lt===void 0&&(lt=new WeakMap,l.set(Tt,lt));let At=lt.get(k);At===void 0&&(At=n.getUniformBlockIndex(Tt,k.name),lt.set(k,At))}function Zt(k,Tt){let At=l.get(Tt).get(k);c.get(Tt)!==At&&(n.uniformBlockBinding(Tt,At,k.__bindingPointIndex),c.set(Tt,At))}function Qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},it=null,rt={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,A=null,L=null,b=null,T=null,w=null,C=null,_=new se(0,0,0),E=0,N=!1,V=null,q=null,U=null,P=null,I=null,xt.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:pt,bindFramebuffer:Pt,drawBuffers:dt,useProgram:Lt,setBlending:Wt,setMaterial:ie,setFlipSided:Vt,setCullFace:ee,setLineWidth:we,setPolygonOffset:Te,setScissorTest:pe,activeTexture:ve,bindTexture:z,unbindTexture:Ie,compressedTexImage2D:he,compressedTexImage3D:R,texImage2D:at,texImage3D:ct,pixelStorei:Xt,getParameter:Et,updateUBOMapping:qt,uniformBlockBinding:Zt,texStorage2D:yt,texStorage3D:bt,texSubImage2D:x,texSubImage3D:W,compressedTexSubImage2D:O,compressedTexSubImage3D:Q,scissor:vt,viewport:wt,reset:Qt}}function f_(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,f=new WeakMap,h=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,x){return g?new OffscreenCanvas(R,x):Hs("canvas")}function m(R,x,W){let O=1,Q=he(R);if((Q.width>W||Q.height>W)&&(O=W/Math.max(Q.width,Q.height)),O<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let yt=Math.floor(O*Q.width),bt=Math.floor(O*Q.height);u===void 0&&(u=v(yt,bt));let at=x?v(yt,bt):u;return at.width=yt,at.height=bt,at.getContext("2d").drawImage(R,0,0,yt,bt),Jt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+yt+"x"+bt+")."),at}else return"data"in R&&Jt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps}function A(R){n.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,x,W,O,Q,yt=!1){if(R!==null){if(n[R]!==void 0)return n[R];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let bt;O&&(bt=t.get("EXT_texture_norm16"),bt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=x;if(x===n.RED&&(W===n.FLOAT&&(at=n.R32F),W===n.HALF_FLOAT&&(at=n.R16F),W===n.UNSIGNED_BYTE&&(at=n.R8),W===n.UNSIGNED_SHORT&&bt&&(at=bt.R16_EXT),W===n.SHORT&&bt&&(at=bt.R16_SNORM_EXT)),x===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(at=n.R8UI),W===n.UNSIGNED_SHORT&&(at=n.R16UI),W===n.UNSIGNED_INT&&(at=n.R32UI),W===n.BYTE&&(at=n.R8I),W===n.SHORT&&(at=n.R16I),W===n.INT&&(at=n.R32I)),x===n.RG&&(W===n.FLOAT&&(at=n.RG32F),W===n.HALF_FLOAT&&(at=n.RG16F),W===n.UNSIGNED_BYTE&&(at=n.RG8),W===n.UNSIGNED_SHORT&&bt&&(at=bt.RG16_EXT),W===n.SHORT&&bt&&(at=bt.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(at=n.RG8UI),W===n.UNSIGNED_SHORT&&(at=n.RG16UI),W===n.UNSIGNED_INT&&(at=n.RG32UI),W===n.BYTE&&(at=n.RG8I),W===n.SHORT&&(at=n.RG16I),W===n.INT&&(at=n.RG32I)),x===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(at=n.RGB8UI),W===n.UNSIGNED_SHORT&&(at=n.RGB16UI),W===n.UNSIGNED_INT&&(at=n.RGB32UI),W===n.BYTE&&(at=n.RGB8I),W===n.SHORT&&(at=n.RGB16I),W===n.INT&&(at=n.RGB32I)),x===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(at=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(at=n.RGBA16UI),W===n.UNSIGNED_INT&&(at=n.RGBA32UI),W===n.BYTE&&(at=n.RGBA8I),W===n.SHORT&&(at=n.RGBA16I),W===n.INT&&(at=n.RGBA32I)),x===n.RGB&&(W===n.UNSIGNED_SHORT&&bt&&(at=bt.RGB16_EXT),W===n.SHORT&&bt&&(at=bt.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(at=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(at=n.R11F_G11F_B10F)),x===n.RGBA){let ct=yt?Vs:ue.getTransfer(Q);W===n.FLOAT&&(at=n.RGBA32F),W===n.HALF_FLOAT&&(at=n.RGBA16F),W===n.UNSIGNED_BYTE&&(at=ct===xe?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&bt&&(at=bt.RGBA16_EXT),W===n.SHORT&&bt&&(at=bt.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(at=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(at=n.RGB5_A1)}return(at===n.R16F||at===n.R32F||at===n.RG16F||at===n.RG32F||at===n.RGBA16F||at===n.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function T(R,x){let W;return R?x===null||x===An||x===ys?W=n.DEPTH24_STENCIL8:x===Cn?W=n.DEPTH32F_STENCIL8:x===xs&&(W=n.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===An||x===ys?W=n.DEPTH_COMPONENT24:x===Cn?W=n.DEPTH_COMPONENT32F:x===xs&&(W=n.DEPTH_COMPONENT16),W}function w(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ve&&R.minFilter!==Ne?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function C(R){let x=R.target;x.removeEventListener("dispose",C),E(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&h.delete(x)}function _(R){let x=R.target;x.removeEventListener("dispose",_),V(x)}function E(R){let x=i.get(R);if(x.__webglInit===void 0)return;let W=R.source,O=d.get(W);if(O){let Q=O[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(R),Object.keys(O).length===0&&d.delete(W)}i.remove(R)}function N(R){let x=i.get(R);n.deleteTexture(x.__webglTexture);let W=R.source,O=d.get(W);delete O[x.__cacheKey],a.memory.textures--}function V(R){let x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(x.__webglFramebuffer[O]))for(let Q=0;Q<x.__webglFramebuffer[O].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[O][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[O]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[O])}else{if(Array.isArray(x.__webglFramebuffer))for(let O=0;O<x.__webglFramebuffer.length;O++)n.deleteFramebuffer(x.__webglFramebuffer[O]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let O=0;O<x.__webglColorRenderbuffer.length;O++)x.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[O]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let W=R.textures;for(let O=0,Q=W.length;O<Q;O++){let yt=i.get(W[O]);yt.__webglTexture&&(n.deleteTexture(yt.__webglTexture),a.memory.textures--),i.remove(W[O])}i.remove(R)}let q=0;function U(){q=0}function P(){return q}function I(R){q=R}function J(){let R=q;return R>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,R}function H(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function st(R,x){let W=i.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){let O=R.image;if(O===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(W,R,x);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+x)}function Z(R,x){let W=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){pt(W,R,x);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+x)}function it(R,x){let W=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){pt(W,R,x);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+x)}function rt(R,x){let W=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&W.__version!==R.version){Pt(W,R,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+x)}let St={[ua]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[fa]:n.MIRRORED_REPEAT},ft={[Ve]:n.NEAREST,[iu]:n.NEAREST_MIPMAP_NEAREST,[cr]:n.NEAREST_MIPMAP_LINEAR,[Ne]:n.LINEAR,[Ga]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},xt={[ou]:n.NEVER,[fu]:n.ALWAYS,[lu]:n.LESS,[To]:n.LEQUAL,[cu]:n.EQUAL,[Ao]:n.GEQUAL,[hu]:n.GREATER,[uu]:n.NOTEQUAL};function _t(R,x){if(x.type===Cn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ne||x.magFilter===Ga||x.magFilter===cr||x.magFilter===vi||x.minFilter===Ne||x.minFilter===Ga||x.minFilter===cr||x.minFilter===vi)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,St[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,St[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,St[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ft[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ft[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ve||x.minFilter!==cr&&x.minFilter!==vi||x.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function gt(R,x){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",C));let O=x.source,Q=d.get(O);Q===void 0&&(Q={},d.set(O,Q));let yt=H(x);if(yt!==R.__cacheKey){Q[yt]===void 0&&(Q[yt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Q[yt].usedTimes++;let bt=Q[R.__cacheKey];bt!==void 0&&(Q[R.__cacheKey].usedTimes--,bt.usedTimes===0&&N(x)),R.__cacheKey=yt,R.__webglTexture=Q[yt].texture}return W}function Y(R,x,W){return Math.floor(Math.floor(R/W)/x)}function nt(R,x,W,O){let yt=R.updateRanges;if(yt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,W,O,x.data);else{yt.sort((Xt,vt)=>Xt.start-vt.start);let bt=0;for(let Xt=1;Xt<yt.length;Xt++){let vt=yt[bt],wt=yt[Xt],qt=vt.start+vt.count,Zt=Y(wt.start,x.width,4),Qt=Y(vt.start,x.width,4);wt.start<=qt+1&&Zt===Qt&&Y(wt.start+wt.count-1,x.width,4)===Zt?vt.count=Math.max(vt.count,wt.start+wt.count-vt.start):(++bt,yt[bt]=wt)}yt.length=bt+1;let at=e.getParameter(n.UNPACK_ROW_LENGTH),ct=e.getParameter(n.UNPACK_SKIP_PIXELS),Et=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Xt=0,vt=yt.length;Xt<vt;Xt++){let wt=yt[Xt],qt=Math.floor(wt.start/4),Zt=Math.ceil(wt.count/4),Qt=qt%x.width,k=Math.floor(qt/x.width),Tt=Zt,lt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,Qt,k,Tt,lt,W,O,x.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,at),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(n.UNPACK_SKIP_ROWS,Et)}}function pt(R,x,W){let O=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=n.TEXTURE_3D);let Q=gt(R,x),yt=x.source;e.bindTexture(O,R.__webglTexture,n.TEXTURE0+W);let bt=i.get(yt);if(yt.version!==bt.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let lt=ue.getPrimaries(ue.workingColorSpace),At=x.colorSpace===ti?null:ue.getPrimaries(x.colorSpace),Rt=x.colorSpace===ti||lt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let ct=m(x.image,!1,s.maxTextureSize);ct=Ie(x,ct);let Et=r.convert(x.format,x.colorSpace),Xt=r.convert(x.type),vt=b(x.internalFormat,Et,Xt,x.normalized,x.colorSpace,x.isVideoTexture);_t(O,x);let wt,qt=x.mipmaps,Zt=x.isVideoTexture!==!0,Qt=bt.__version===void 0||Q===!0,k=yt.dataReady,Tt=w(x,ct);if(x.isDepthTexture)vt=T(x.format===Mi,x.type),Qt&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,vt,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,vt,ct.width,ct.height,0,Et,Xt,null));else if(x.isDataTexture)if(qt.length>0){Zt&&Qt&&e.texStorage2D(n.TEXTURE_2D,Tt,vt,qt[0].width,qt[0].height);for(let lt=0,At=qt.length;lt<At;lt++)wt=qt[lt],Zt?k&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,wt.width,wt.height,Et,Xt,wt.data):e.texImage2D(n.TEXTURE_2D,lt,vt,wt.width,wt.height,0,Et,Xt,wt.data);x.generateMipmaps=!1}else Zt?(Qt&&e.texStorage2D(n.TEXTURE_2D,Tt,vt,ct.width,ct.height),k&&nt(x,ct,Et,Xt)):e.texImage2D(n.TEXTURE_2D,0,vt,ct.width,ct.height,0,Et,Xt,ct.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Zt&&Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,vt,qt[0].width,qt[0].height,ct.depth);for(let lt=0,At=qt.length;lt<At;lt++)if(wt=qt[lt],x.format!==gn)if(Et!==null)if(Zt){if(k)if(x.layerUpdates.size>0){let Rt=sc(wt.width,wt.height,x.format,x.type);for(let ut of x.layerUpdates){let Yt=wt.data.subarray(ut*Rt/wt.data.BYTES_PER_ELEMENT,(ut+1)*Rt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,ut,wt.width,wt.height,1,Et,Yt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,wt.width,wt.height,ct.depth,Et,wt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,vt,wt.width,wt.height,ct.depth,0,wt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,wt.width,wt.height,ct.depth,Et,Xt,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,vt,wt.width,wt.height,ct.depth,0,Et,Xt,wt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Zt&&Qt&&e.texStorage2D(n.TEXTURE_2D,Tt,vt,qt[0].width,qt[0].height);for(let lt=0,At=qt.length;lt<At;lt++)wt=qt[lt],x.format!==gn?Et!==null?Zt?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,wt.width,wt.height,Et,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,vt,wt.width,wt.height,0,wt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?k&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,wt.width,wt.height,Et,Xt,wt.data):e.texImage2D(n.TEXTURE_2D,lt,vt,wt.width,wt.height,0,Et,Xt,wt.data)}else if(x.isDataArrayTexture)if(Zt){if(Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,vt,ct.width,ct.height,ct.depth),k)if(x.layerUpdates.size>0){let lt=sc(ct.width,ct.height,x.format,x.type);for(let At of x.layerUpdates){let Rt=ct.data.subarray(At*lt/ct.data.BYTES_PER_ELEMENT,(At+1)*lt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,At,ct.width,ct.height,1,Et,Xt,Rt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Et,Xt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,ct.width,ct.height,ct.depth,0,Et,Xt,ct.data);else if(x.isData3DTexture)Zt?(Qt&&e.texStorage3D(n.TEXTURE_3D,Tt,vt,ct.width,ct.height,ct.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Et,Xt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,vt,ct.width,ct.height,ct.depth,0,Et,Xt,ct.data);else if(x.isFramebufferTexture){if(Qt)if(Zt)e.texStorage2D(n.TEXTURE_2D,Tt,vt,ct.width,ct.height);else{let lt=ct.width,At=ct.height;for(let Rt=0;Rt<Tt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,vt,lt,At,0,Et,Xt,null),lt>>=1,At>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let lt=n.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),ct.parentNode!==lt){lt.appendChild(ct),h.add(x),lt.onpaint=At=>{let Rt=At.changedElements;for(let ut of h)Rt.includes(ut.image)&&(ut.needsUpdate=!0)},lt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ct);else{let Rt=n.RGBA,ut=n.RGBA,Yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,ut,Yt,ct)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(qt.length>0){if(Zt&&Qt){let lt=he(qt[0]);e.texStorage2D(n.TEXTURE_2D,Tt,vt,lt.width,lt.height)}for(let lt=0,At=qt.length;lt<At;lt++)wt=qt[lt],Zt?k&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Et,Xt,wt):e.texImage2D(n.TEXTURE_2D,lt,vt,Et,Xt,wt);x.generateMipmaps=!1}else if(Zt){if(Qt){let lt=he(ct);e.texStorage2D(n.TEXTURE_2D,Tt,vt,lt.width,lt.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Xt,ct)}else e.texImage2D(n.TEXTURE_2D,0,vt,Et,Xt,ct);p(x)&&A(O),bt.__version=yt.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Pt(R,x,W){if(x.image.length!==6)return;let O=gt(R,x),Q=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+W);let yt=i.get(Q);if(Q.version!==yt.__version||O===!0){e.activeTexture(n.TEXTURE0+W);let bt=ue.getPrimaries(ue.workingColorSpace),at=x.colorSpace===ti?null:ue.getPrimaries(x.colorSpace),ct=x.colorSpace===ti||bt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Et=x.isCompressedTexture||x.image[0].isCompressedTexture,Xt=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let ut=0;ut<6;ut++)!Et&&!Xt?vt[ut]=m(x.image[ut],!0,s.maxCubemapSize):vt[ut]=Xt?x.image[ut].image:x.image[ut],vt[ut]=Ie(x,vt[ut]);let wt=vt[0],qt=r.convert(x.format,x.colorSpace),Zt=r.convert(x.type),Qt=b(x.internalFormat,qt,Zt,x.normalized,x.colorSpace),k=x.isVideoTexture!==!0,Tt=yt.__version===void 0||O===!0,lt=Q.dataReady,At=w(x,wt);_t(n.TEXTURE_CUBE_MAP,x);let Rt;if(Et){k&&Tt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,Qt,wt.width,wt.height);for(let ut=0;ut<6;ut++){Rt=vt[ut].mipmaps;for(let Yt=0;Yt<Rt.length;Yt++){let Gt=Rt[Yt];x.format!==gn?qt!==null?k?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,0,0,Gt.width,Gt.height,qt,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,Qt,Gt.width,Gt.height,0,Gt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,0,0,Gt.width,Gt.height,qt,Zt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt,Qt,Gt.width,Gt.height,0,qt,Zt,Gt.data)}}}else{if(Rt=x.mipmaps,k&&Tt){Rt.length>0&&At++;let ut=he(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,Qt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Xt){k?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,vt[ut].width,vt[ut].height,qt,Zt,vt[ut].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Qt,vt[ut].width,vt[ut].height,0,qt,Zt,vt[ut].data);for(let Yt=0;Yt<Rt.length;Yt++){let ye=Rt[Yt].image[ut].image;k?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,0,0,ye.width,ye.height,qt,Zt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,Qt,ye.width,ye.height,0,qt,Zt,ye.data)}}else{k?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,qt,Zt,vt[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Qt,qt,Zt,vt[ut]);for(let Yt=0;Yt<Rt.length;Yt++){let Gt=Rt[Yt];k?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,0,0,qt,Zt,Gt.image[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Yt+1,Qt,qt,Zt,Gt.image[ut])}}}p(x)&&A(n.TEXTURE_CUBE_MAP),yt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function dt(R,x,W,O,Q,yt){let bt=r.convert(W.format,W.colorSpace),at=r.convert(W.type),ct=b(W.internalFormat,bt,at,W.normalized,W.colorSpace),Et=i.get(x),Xt=i.get(W);if(Xt.__renderTarget=x,!Et.__hasExternalTextures){let vt=Math.max(1,x.width>>yt),wt=Math.max(1,x.height>>yt);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,yt,ct,vt,wt,x.depth,0,bt,at,null):e.texImage2D(Q,yt,ct,vt,wt,0,bt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,Q,Xt.__webglTexture,0,pe(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,Q,Xt.__webglTexture,yt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(R,x,W){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){let O=x.depthTexture,Q=O&&O.isDepthTexture?O.type:null,yt=T(x.stencilBuffer,Q),bt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe(x),yt,x.width,x.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe(x),yt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,yt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,R)}else{let O=x.textures;for(let Q=0;Q<O.length;Q++){let yt=O[Q],bt=r.convert(yt.format,yt.colorSpace),at=r.convert(yt.type),ct=b(yt.internalFormat,bt,at,yt.normalized,yt.colorSpace);ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe(x),ct,x.width,x.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe(x),ct,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ct,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Kt(R,x,W){let O=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),O){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),_t(n.TEXTURE_CUBE_MAP,x.depthTexture);let Et=r.convert(x.depthTexture.format),Xt=r.convert(x.depthTexture.type),vt;x.depthTexture.format===Bn?vt=n.DEPTH_COMPONENT24:x.depthTexture.format===Mi&&(vt=n.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,vt,x.width,x.height,0,Et,Xt,null)}}else st(x.depthTexture,0);let yt=Q.__webglTexture,bt=pe(x),at=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,ct=x.depthTexture.format===Mi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Bn)ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,at,yt,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,ct,at,yt,0);else if(x.depthTexture.format===Mi)ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,at,yt,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,ct,at,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(R){let x=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let O=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),O){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,O.removeEventListener("dispose",Q)};O.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=O}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(W)for(let O=0;O<6;O++)Kt(x.__webglFramebuffer[O],R,O);else{let O=R.texture.mipmaps;O&&O.length>0?Kt(x.__webglFramebuffer[0],R,0):Kt(x.__webglFramebuffer,R,0)}else if(W){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]===void 0)x.__webglDepthbuffer[O]=n.createRenderbuffer(),Lt(x.__webglDepthbuffer[O],R,!1);else{let Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=x.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,yt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,yt)}}else{let O=R.texture.mipmaps;if(O&&O.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Lt(x.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,yt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,yt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(R,x,W){let O=i.get(R);x!==void 0&&dt(O.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Ot(R)}function ie(R){let x=R.texture,W=i.get(R),O=i.get(x);R.addEventListener("dispose",_);let Q=R.textures,yt=R.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=x.version,a.memory.textures++),yt){W.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[at]=[];for(let ct=0;ct<x.mipmaps.length;ct++)W.__webglFramebuffer[at][ct]=n.createFramebuffer()}else W.__webglFramebuffer[at]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)W.__webglFramebuffer[at]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(bt)for(let at=0,ct=Q.length;at<ct;at++){let Et=i.get(Q[at]);Et.__webglTexture===void 0&&(Et.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ve(R)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){let ct=Q[at];W.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[at]);let Et=r.convert(ct.format,ct.colorSpace),Xt=r.convert(ct.type),vt=b(ct.internalFormat,Et,Xt,ct.normalized,ct.colorSpace,R.isXRRenderTarget===!0),wt=pe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,vt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,W.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(yt){e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),_t(n.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let ct=0;ct<x.mipmaps.length;ct++)dt(W.__webglFramebuffer[at][ct],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct);else dt(W.__webglFramebuffer[at],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(x)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let at=0,ct=Q.length;at<ct;at++){let Et=Q[at],Xt=i.get(Et),vt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,Xt.__webglTexture),_t(vt,Et),dt(W.__webglFramebuffer,R,Et,n.COLOR_ATTACHMENT0+at,vt,0),p(Et)&&A(vt)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,O.__webglTexture),_t(at,x),x.mipmaps&&x.mipmaps.length>0)for(let ct=0;ct<x.mipmaps.length;ct++)dt(W.__webglFramebuffer[ct],R,x,n.COLOR_ATTACHMENT0,at,ct);else dt(W.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,at,0);p(x)&&A(at),e.unbindTexture()}R.depthBuffer&&Ot(R)}function Vt(R){let x=R.textures;for(let W=0,O=x.length;W<O;W++){let Q=x[W];if(p(Q)){let yt=L(R),bt=i.get(Q).__webglTexture;e.bindTexture(yt,bt),A(yt),e.unbindTexture()}}}let ee=[],we=[];function Te(R){if(R.samples>0){if(ve(R)===!1){let x=R.textures,W=R.width,O=R.height,Q=n.COLOR_BUFFER_BIT,yt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(R),at=x.length>1;if(at)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let ct=R.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Et]);let Xt=i.get(x[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xt,0)}n.blitFramebuffer(0,0,W,O,0,0,W,O,Q,n.NEAREST),c===!0&&(ee.length=0,we.length=0,ee.push(n.COLOR_ATTACHMENT0+Et),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ee.push(yt),we.push(yt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,we)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Et]);let Xt=i.get(x[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,Xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function pe(R){return Math.min(s.maxSamples,R.samples)}function ve(R){let x=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function z(R){let x=a.render.frame;f.get(R)!==x&&(f.set(R,x),R.update())}function Ie(R,x){let W=R.colorSpace,O=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==ks&&W!==ti&&(ue.getTransfer(W)===xe?(O!==gn||Q!==dn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",W)),x}function he(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=U,this.getTextureUnits=P,this.setTextureUnits=I,this.setTexture2D=st,this.setTexture2DArray=Z,this.setTexture3D=it,this.setTextureCube=rt,this.rebindTextures=Wt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function d_(n,t){function e(i,s=ti){let r,a=ue.getTransfer(s);if(i===dn)return n.UNSIGNED_BYTE;if(i===Wa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$l)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xl)return n.BYTE;if(i===ql)return n.SHORT;if(i===xs)return n.UNSIGNED_SHORT;if(i===Ha)return n.INT;if(i===An)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===Rn)return n.HALF_FLOAT;if(i===Zl)return n.ALPHA;if(i===Jl)return n.RGB;if(i===gn)return n.RGBA;if(i===Bn)return n.DEPTH_COMPONENT;if(i===Mi)return n.DEPTH_STENCIL;if(i===Kl)return n.RED;if(i===qa)return n.RED_INTEGER;if(i===Si)return n.RG;if(i===Ya)return n.RG_INTEGER;if(i===$a)return n.RGBA_INTEGER;if(i===hr||i===ur||i===fr||i===dr)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Ka||i===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qa||i===to||i===eo||i===no||i===io||i===pr||i===so)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qa||i===to)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===eo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===no)return r.COMPRESSED_R11_EAC;if(i===io)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pr)return r.COMPRESSED_RG11_EAC;if(i===so)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===_o||i===xo||i===yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ro)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ao)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===co)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ho)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===po)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===go)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_o)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vo||i===Mo||i===So)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===vo)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===So)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bo||i===wo||i===mr||i===Eo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===bo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var p_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m_=`
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

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new er(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new $e({vertexShader:p_,fragmentShader:m_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends zn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,f=null,h=null,u=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new bc,p={},A=e.getContextAttributes(),L=null,b=null,T=[],w=[],C=new ce,_=null,E=null,N=new Ye;N.viewport=new Re;let V=new Ye;V.viewport=new Re;let q=[N,V],U=new Ba,P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=T[Y];return nt===void 0&&(nt=new ps,T[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=T[Y];return nt===void 0&&(nt=new ps,T[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=T[Y];return nt===void 0&&(nt=new ps,T[Y]=nt),nt.getHandSpace()};function J(Y){let nt=w.indexOf(Y.inputSource);if(nt===-1)return;let pt=T[nt];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,l||a),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",st);for(let Y=0;Y<T.length;Y++){let nt=w[Y];nt!==null&&(w[Y]=null,T[Y].disconnect(nt))}P=null,I=null,m.reset();for(let Y in p)delete p[Y];if(t.setRenderTarget(L),d=null,u=null,h=null,s=null,b=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),E!==null){let Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",H),s.addEventListener("inputsourceschange",st),A.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Pt=null,dt=null;A.depth&&(dt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=A.stencil?Mi:Bn,Pt=A.stencil?ys:An);let Lt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new nn(u.textureWidth,u.textureHeight,{format:gn,type:dn,depthTexture:new pi(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new nn(d.framebufferWidth,d.framebufferHeight,{format:gn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(Y){for(let nt=0;nt<Y.removed.length;nt++){let pt=Y.removed[nt],Pt=w.indexOf(pt);Pt>=0&&(w[Pt]=null,T[Pt].disconnect(pt))}for(let nt=0;nt<Y.added.length;nt++){let pt=Y.added[nt],Pt=w.indexOf(pt);if(Pt===-1){for(let Lt=0;Lt<T.length;Lt++)if(Lt>=w.length){w.push(pt),Pt=Lt;break}else if(w[Lt]===null){w[Lt]=pt,Pt=Lt;break}if(Pt===-1)break}let dt=T[Pt];dt&&dt.connect(pt)}}let Z=new $,it=new $;function rt(Y,nt,pt){Z.setFromMatrixPosition(nt.matrixWorld),it.setFromMatrixPosition(pt.matrixWorld);let Pt=Z.distanceTo(it),dt=nt.projectionMatrix.elements,Lt=pt.projectionMatrix.elements,Kt=dt[14]/(dt[10]-1),Ot=dt[14]/(dt[10]+1),Wt=(dt[9]+1)/dt[5],ie=(dt[9]-1)/dt[5],Vt=(dt[8]-1)/dt[0],ee=(Lt[8]+1)/Lt[0],we=Kt*Vt,Te=Kt*ee,pe=Pt/(-Vt+ee),ve=pe*-Vt;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ve),Y.translateZ(pe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),dt[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let z=Kt+pe,Ie=Ot+pe,he=we-ve,R=Te+(Pt-ve),x=Wt*Ot/Ie*z,W=ie*Ot/Ie*z;Y.projectionMatrix.makePerspective(he,R,x,W,z,Ie),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function St(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,pt=Y.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),U.near=V.near=N.near=nt,U.far=V.far=N.far=pt,(P!==U.near||I!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,I=U.far),U.layers.mask=Y.layers.mask|6,N.layers.mask=U.layers.mask&-5,V.layers.mask=U.layers.mask&-3;let Pt=Y.parent,dt=U.cameras;St(U,Pt);for(let Lt=0;Lt<dt.length;Lt++)St(dt[Lt],Pt);dt.length===2?rt(U,N,V):U.projectionMatrix.copy(N.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),ft(Y,U,Pt)};function ft(Y,nt,pt){pt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=pa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return p[Y]};let xt=null;function _t(Y,nt){if(f=nt.getViewerPose(l||a),g=nt,f!==null){let pt=f.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Pt=!1;pt.length!==U.cameras.length&&(U.cameras.length=0,Pt=!0);for(let Ot=0;Ot<pt.length;Ot++){let Wt=pt[Ot],ie=null;if(d!==null)ie=d.getViewport(Wt);else{let ee=h.getViewSubImage(u,Wt);ie=ee.viewport,Ot===0&&(t.setRenderTargetTextures(b,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(b))}let Vt=q[Ot];Vt===void 0&&(Vt=new Ye,Vt.layers.enable(Ot),Vt.viewport=new Re,q[Ot]=Vt),Vt.matrix.fromArray(Wt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Wt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ie.x,ie.y,ie.width,ie.height),Ot===0&&(U.matrix.copy(Vt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Pt===!0&&U.cameras.push(Vt)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();let Ot=h.getDepthInformation(pt[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(dt&&dt.includes("camera-access")&&v){t.state.unbindTexture(),h=i.getBinding();for(let Ot=0;Ot<pt.length;Ot++){let Wt=pt[Ot].camera;if(Wt){let ie=p[Wt];ie||(ie=new er,p[Wt]=ie);let Vt=h.getCameraImage(Wt);ie.sourceTexture=Vt}}}}for(let pt=0;pt<T.length;pt++){let Pt=w[pt],dt=T[pt];Pt!==null&&dt!==void 0&&dt.update(Pt,nt,l||a)}xt&&xt(Y,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}let gt=new Hu;gt.setAnimationLoop(_t),this.setAnimationLoop=function(Y){xt=Y},this.dispose=function(){}}},g_=new Ce,Zu=new ne;Zu.set(-1,0,0,0,1,0,0,0,1);function __(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ec(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,L,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,A,L):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A=t.get(p),L=A.envMap,b=A.envMapRotation;L&&(m.envMap.value=L,m.envMapRotation.value.setFromMatrix4(g_.makeRotationFromEuler(b)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,A,L){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=L*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function x_(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){let w=T.program;i.uniformBlockBinding(b,w)}function l(b,T){let w=s[b.id];w===void 0&&(m(b),w=f(b),s[b.id]=w,b.addEventListener("dispose",A));let C=T.program;i.updateUBOMapping(b,C);let _=t.render.frame;r[b.id]!==_&&(u(b),r[b.id]=_)}function f(b){let T=h();b.__bindingPointIndex=T;let w=n.createBuffer(),C=b.__size,_=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,w),w}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let T=s[b.id],w=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let _=0,E=w.length;_<E;_++){let N=w[_];if(Array.isArray(N))for(let V=0,q=N.length;V<q;V++)d(N[V],_,V,C);else d(N,_,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,T,w,C){if(v(b,T,w,C)===!0){let _=b.__offset,E=b.value;if(Array.isArray(E)){let N=0;for(let V=0;V<E.length;V++){let q=E[V],U=p(q);g(q,b.__data,N),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(N+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,b.__data)}}function g(b,T,w){typeof b=="number"||typeof b=="boolean"?T[0]=b:b.isMatrix3?(T[0]=b.elements[0],T[1]=b.elements[1],T[2]=b.elements[2],T[3]=0,T[4]=b.elements[3],T[5]=b.elements[4],T[6]=b.elements[5],T[7]=0,T[8]=b.elements[6],T[9]=b.elements[7],T[10]=b.elements[8],T[11]=0):ArrayBuffer.isView(b)?T.set(new b.constructor(b.buffer,b.byteOffset,T.length)):b.toArray(T,w)}function v(b,T,w,C){let _=b.value,E=T+"_"+w;if(C[E]===void 0)return typeof _=="number"||typeof _=="boolean"?C[E]=_:ArrayBuffer.isView(_)?C[E]=_.slice():C[E]=_.clone(),!0;{let N=C[E];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return C[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function m(b){let T=b.uniforms,w=0,C=16;for(let E=0,N=T.length;E<N;E++){let V=Array.isArray(T[E])?T[E]:[T[E]];for(let q=0,U=V.length;q<U;q++){let P=V[q],I=Array.isArray(P.value)?P.value:[P.value];for(let J=0,H=I.length;J<H;J++){let st=I[J],Z=p(st),it=w%C,rt=it%Z.boundary,St=it+rt;w+=rt,St!==0&&C-St<Z.storage&&(w+=C-St),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=Z.storage}}}let _=w%C;return _>0&&(w+=C-_),b.__size=w,b.__cache={},this}function p(b){let T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",b),T}function A(b){let T=b.target;T.removeEventListener("dispose",A);let w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function L(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:L}}var y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function v_(){return Hn===null&&(Hn=new ya(y_,16,16,Si,Rn),Hn.name="DFG_LUT",Hn.minFilter=Ne,Hn.magFilter=Ne,Hn.wrapS=On,Hn.wrapT=On,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var Lo=class{constructor(t={}){let{canvas:e=du(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=dn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=d,m=new Set([$a,Ya,qa]),p=new Set([dn,An,xs,ys,Wa,Xa]),A=new Uint32Array(4),L=new Int32Array(4),b=new $,T=null,w=null,C=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,V=!1,q=null,U=null,P=null,I=null;this._outputColorSpace=ke;let J=0,H=0,st=null,Z=-1,it=null,rt=new Re,St=new Re,ft=null,xt=new se(0),_t=0,gt=e.width,Y=e.height,nt=1,pt=null,Pt=null,dt=new Re(0,0,gt,Y),Lt=new Re(0,0,gt,Y),Kt=!1,Ot=new js,Wt=!1,ie=!1,Vt=new Ce,ee=new $,we=new Re,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function ve(){return st===null?nt:1}let z=i;function Ie(M,B){return e.getContext(M,B)}let he,R,x,W,O,Q,yt,bt,at,ct,Et,Xt,vt,wt,qt,Zt,Qt,k,Tt,lt,At,Rt,ut;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",on,!1),z===null){let B="webgl2";if(z=Ie(B,M),z===null)throw Ie(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(M){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",on,!1),te("WebGLRenderer: "+M.message),M}function Yt(){he=new A0(z),he.init(),At=new d_(z,he),R=new _0(z,he,t,At),x=new u_(z,he),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),U=z.createFramebuffer(),P=z.createFramebuffer(),I=z.createFramebuffer(),W=new I0(z),O=new Kg,Q=new f_(z,he,x,O,R,At,W),yt=new T0(N),bt=new Ld(z),Rt=new m0(z,bt),at=new C0(z,bt,W,Rt),ct=new L0(z,at,bt,Rt,W),k=new P0(z,R,Q),qt=new x0(O),Et=new Jg(N,yt,he,R,Rt,qt),Xt=new __(N,O),vt=new Qg,wt=new r_(he),Qt=new p0(N,yt,x,ct,g,c),Zt=new h_(N,ct,R),ut=new x_(z,W,R,x),Tt=new g0(z,he,W),lt=new R0(z,he,W),W.programs=Et.programs,N.capabilities=R,N.extensions=he,N.properties=O,N.renderLists=vt,N.shadowMap=Zt,N.state=x,N.info=W}v!==dn&&(E=new N0(v,e.width,e.height,o,s,r));let Gt=new wc(N,z);this.xr=Gt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let M=he.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=he.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(M){M!==void 0&&(nt=M,this.setSize(gt,Y,!1))},this.getSize=function(M){return M.set(gt,Y)},this.setSize=function(M,B,tt=!0){if(Gt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=M,Y=B,e.width=Math.floor(M*nt),e.height=Math.floor(B*nt),tt===!0&&(e.style.width=M+"px",e.style.height=B+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(gt*nt,Y*nt).floor()},this.setDrawingBufferSize=function(M,B,tt){gt=M,Y=B,nt=tt,e.width=Math.floor(M*tt),e.height=Math.floor(B*tt),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(v===dn){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(rt)},this.getViewport=function(M){return M.copy(dt)},this.setViewport=function(M,B,tt,K){M.isVector4?dt.set(M.x,M.y,M.z,M.w):dt.set(M,B,tt,K),x.viewport(rt.copy(dt).multiplyScalar(nt).round())},this.getScissor=function(M){return M.copy(Lt)},this.setScissor=function(M,B,tt,K){M.isVector4?Lt.set(M.x,M.y,M.z,M.w):Lt.set(M,B,tt,K),x.scissor(St.copy(Lt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(M){x.setScissorTest(Kt=M)},this.setOpaqueSort=function(M){pt=M},this.setTransparentSort=function(M){Pt=M},this.getClearColor=function(M){return M.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,tt=!0){let K=0;if(M){let j=!1;if(st!==null){let Ct=st.texture.format;j=m.has(Ct)}if(j){let Ct=st.texture.type,Ut=p.has(Ct),It=Qt.getClearColor(),Bt=Qt.getClearAlpha(),Ht=It.r,re=It.g,le=It.b;Ut?(A[0]=Ht,A[1]=re,A[2]=le,A[3]=Bt,z.clearBufferuiv(z.COLOR,0,A)):(L[0]=Ht,L[1]=re,L[2]=le,L[3]=Bt,z.clearBufferiv(z.COLOR,0,L))}else K|=z.COLOR_BUFFER_BIT}B&&(K|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),q=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",on,!1),Qt.dispose(),vt.dispose(),wt.dispose(),O.dispose(),yt.dispose(),ct.dispose(),Rt.dispose(),ut.dispose(),Et.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",ln),Gt.removeEventListener("sessionend",Pe),Dn.stop()};function ye(M){M.preventDefault(),Ws("WebGLRenderer: Context Lost."),V=!0}function me(){Ws("WebGLRenderer: Context Restored."),V=!1;let M=W.autoReset,B=Zt.enabled,tt=Zt.autoUpdate,K=Zt.needsUpdate,j=Zt.type;Yt(),W.autoReset=M,Zt.enabled=B,Zt.autoUpdate=tt,Zt.needsUpdate=K,Zt.type=j}function on(M){te("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function en(M){let B=M.target;B.removeEventListener("dispose",en),wi(B)}function wi(M){Zo(M),O.remove(M)}function Zo(M){let B=O.get(M).programs;B!==void 0&&(B.forEach(function(tt){Et.releaseProgram(tt)}),M.isShaderMaterial&&Et.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,tt,K,j,Ct){B===null&&(B=Te);let Ut=j.isMesh&&j.matrixWorld.determinantAffine()<0,It=Ko(M,B,tt,K,j);x.setMaterial(K,Ut);let Bt=tt.index,Ht=1;if(K.wireframe===!0){if(Bt=at.getWireframeAttribute(tt),Bt===void 0)return;Ht=2}let re=tt.drawRange,le=tt.attributes.position,zt=re.start*Ht,ge=(re.start+re.count)*Ht;Ct!==null&&(zt=Math.max(zt,Ct.start*Ht),ge=Math.min(ge,(Ct.start+Ct.count)*Ht)),Bt!==null?(zt=Math.max(zt,0),ge=Math.min(ge,Bt.count)):le!=null&&(zt=Math.max(zt,0),ge=Math.min(ge,le.count));let Ae=ge-zt;if(Ae<0||Ae===1/0)return;Rt.setup(j,K,It,tt,Bt);let Se,y=Tt;if(Bt!==null&&(Se=bt.get(Bt),y=lt,y.setIndex(Se)),j.isMesh)K.wireframe===!0?(x.setLineWidth(K.wireframeLinewidth*ve()),y.setMode(z.LINES)):y.setMode(z.TRIANGLES);else if(j.isLine){let D=K.linewidth;D===void 0&&(D=1),x.setLineWidth(D*ve()),j.isLineSegments?y.setMode(z.LINES):j.isLineLoop?y.setMode(z.LINE_LOOP):y.setMode(z.LINE_STRIP)}else j.isPoints?y.setMode(z.POINTS):j.isSprite&&y.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(he.get("WEBGL_multi_draw"))y.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let D=j._multiDrawStarts,F=j._multiDrawCounts,et=j._multiDrawCount,X=Bt?bt.get(Bt).bytesPerElement:1,ot=O.get(K).currentProgram.getUniforms();for(let ht=0;ht<et;ht++)ot.setValue(z,"_gl_DrawID",ht),y.render(D[ht]/X,F[ht])}else if(j.isInstancedMesh)y.renderInstances(zt,Ae,j.count);else if(tt.isInstancedBufferGeometry){let D=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,F=Math.min(tt.instanceCount,D);y.renderInstances(zt,Ae,F)}else y.render(zt,Ae)};function Wi(M,B,tt,K){q!==null&&M.isNodeMaterial&&q.setObject(K,M),Wt===!0&&qt.setState(M,tt,!1),M.transparent===!0&&M.side===mn&&M.forceSinglePass===!1?(M.side=tn,M.needsUpdate=!0,Je(M,B,K),M.side=xi,M.needsUpdate=!0,Je(M,B,K),M.side=mn):Je(M,B,K)}this.compile=function(M,B,tt=null){tt===null&&(tt=M),q!==null&&q.renderStart(M,B,tt),w=wt.get(tt),w.init(B),_.push(w),tt.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),M!==tt&&M.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),q!==null&&q.updateLights(w.state.lightsArray),ie=this.localClippingEnabled,Wt=qt.init(this.clippingPlanes,ie),Wt===!0&&qt.setGlobalState(this.clippingPlanes,B),q!==null&&Zt.render(w.state.shadowsArray,tt,B);let K=new Set;return M.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ct=j.material;if(Ct)if(Array.isArray(Ct))for(let Ut=0;Ut<Ct.length;Ut++){let It=Ct[Ut];Wi(It,tt,B,j),K.add(It)}else Wi(Ct,tt,B,j),K.add(Ct)}),w=_.pop(),q!==null&&q.renderEnd(),K},this.compileAsync=function(M,B,tt=null){let K=this.compile(M,B,tt);return new Promise(j=>{function Ct(){if(K.forEach(function(Ut){let Bt=O.get(Ut).currentProgram;(Bt===void 0||Bt.isReady())&&K.delete(Ut)}),K.size===0){j(M);return}setTimeout(Ct,10)}he.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Rs=null;function Jo(M){Rs&&Rs(M)}function ln(){Dn.stop()}function Pe(){Dn.start()}let Dn=new Hu;Dn.setAnimationLoop(Jo),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(M){Rs=M,Gt.setAnimationLoop(M),M===null?Dn.stop():Dn.start()},Gt.addEventListener("sessionstart",ln),Gt.addEventListener("sessionend",Pe),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(M,B);let tt=Gt.enabled===!0&&Gt.isPresenting===!0,K=E!==null&&(st===null||tt)&&E.begin(N,st);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(B),B=Gt.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,B,st),w=wt.get(M,_.length),w.init(B),w.state.textureUnits=Q.getTextureUnits(),_.push(w),Vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ot.setFromProjectionMatrix(Vt,bn,B.reversedDepth),ie=this.localClippingEnabled,Wt=qt.init(this.clippingPlanes,ie),T=vt.get(M,C.length),T.init(),C.push(T),Gt.enabled===!0&&Gt.isPresenting===!0){let Ut=N.xr.getDepthSensingMesh();Ut!==null&&Xi(Ut,B,-1/0,N.sortObjects)}Xi(M,B,0,N.sortObjects),T.finish(),q!==null&&q.updateLights(w.state.lightsArray),N.sortObjects===!0&&T.sort(pt,Pt),pe=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,pe&&Qt.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&qt.beginShadows();let j=w.state.shadowsArray;if(Zt.render(j,M,B),Wt===!0&&qt.endShadows(),(K&&E.hasRenderPass())===!1){let Ut=T.opaque,It=T.transmissive;if(w.setupLights(),B.isArrayCamera){let Bt=B.cameras;if(It.length>0)for(let Ht=0,re=Bt.length;Ht<re;Ht++){let le=Bt[Ht];qi(Ut,It,M,le)}pe&&Qt.render(M);for(let Ht=0,re=Bt.length;Ht<re;Ht++){let le=Bt[Ht];_n(T,M,le,le.viewport)}}else It.length>0&&qi(Ut,It,M,B),pe&&Qt.render(M),_n(T,M,B)}st!==null&&H===0&&(Q.updateMultisampleRenderTarget(st),Q.updateRenderTargetMipmap(st)),K&&E.end(N),M.isScene===!0&&M.onAfterRender(N,M,B),Rt.resetDefaultState(),Z=-1,it=null,_.pop(),_.length>0?(w=_[_.length-1],Q.setTextureUnits(w.state.textureUnits),Wt===!0&&qt.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,q!==null&&q.renderEnd()};function Xi(M,B,tt,K){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)tt=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Ot)){K&&we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Vt);let Ut=ct.update(M),It=M.material;It.visible&&T.push(M,Ut,It,tt,we.z,null,B)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Ot))){let Ut=ct.update(M),It=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),we.copy(M.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),we.copy(Ut.boundingSphere.center)),we.applyMatrix4(M.matrixWorld).applyMatrix4(Vt)),Array.isArray(It)){let Bt=Ut.groups;for(let Ht=0,re=Bt.length;Ht<re;Ht++){let le=Bt[Ht],zt=It[le.materialIndex];zt&&zt.visible&&T.push(M,Ut,zt,tt,we.z,le,B)}}else It.visible&&T.push(M,Ut,It,tt,we.z,null,B)}}let Ct=M.children;for(let Ut=0,It=Ct.length;Ut<It;Ut++)Xi(Ct[Ut],B,tt,K)}function _n(M,B,tt,K){let{opaque:j,transmissive:Ct,transparent:Ut}=M;w.setupLightsView(tt),Wt===!0&&qt.setGlobalState(N.clippingPlanes,tt),K&&x.viewport(rt.copy(K)),j.length>0&&qn(j,B,tt),Ct.length>0&&qn(Ct,B,tt),Ut.length>0&&qn(Ut,B,tt),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function qi(M,B,tt,K){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[K.id]===void 0){let zt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[K.id]=new nn(1,1,{generateMipmaps:!0,type:zt?Rn:dn,minFilter:vi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Ct=w.state.transmissionRenderTarget[K.id],Ut=K.viewport||rt;Ct.setSize(Ut.z*N.transmissionResolutionScale,Ut.w*N.transmissionResolutionScale);let It=N.getRenderTarget(),Bt=N.getActiveCubeFace(),Ht=N.getActiveMipmapLevel();N.setRenderTarget(Ct),N.getClearColor(xt),_t=N.getClearAlpha(),_t<1&&N.setClearColor(16777215,.5),N.clear(),pe&&Qt.render(tt);let re=N.toneMapping;N.toneMapping=Tn;let le=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),w.setupLightsView(K),Wt===!0&&qt.setGlobalState(N.clippingPlanes,K),qn(M,tt,K),Q.updateMultisampleRenderTarget(Ct),Q.updateRenderTargetMipmap(Ct),he.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let ge=0,Ae=B.length;ge<Ae;ge++){let Se=B[ge],{object:y,geometry:D,material:F,group:et}=Se;if(F.side===mn&&y.layers.test(K.layers)){let X=F.side;F.side=tn,F.needsUpdate=!0,Is(y,tt,K,D,F,et),F.side=X,F.needsUpdate=!0,zt=!0}}zt===!0&&(Q.updateMultisampleRenderTarget(Ct),Q.updateRenderTargetMipmap(Ct))}N.setRenderTarget(It,Bt,Ht),N.setClearColor(xt,_t),le!==void 0&&(K.viewport=le),N.toneMapping=re}function qn(M,B,tt){let K=B.isScene===!0?B.overrideMaterial:null;for(let j=0,Ct=M.length;j<Ct;j++){let Ut=M[j],{object:It,geometry:Bt,group:Ht}=Ut,re=Ut.material;re.allowOverride===!0&&K!==null&&(re=K),It.layers.test(tt.layers)&&Is(It,B,tt,Bt,re,Ht)}}function Is(M,B,tt,K,j,Ct){q!==null&&j.isNodeMaterial&&q.setObject(M,j),M.onBeforeRender(N,B,tt,K,j,Ct),M.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),j.onBeforeRender(N,B,tt,K,M,Ct),j.transparent===!0&&j.side===mn&&j.forceSinglePass===!1?(j.side=tn,j.needsUpdate=!0,N.renderBufferDirect(tt,B,K,j,M,Ct),j.side=xi,j.needsUpdate=!0,N.renderBufferDirect(tt,B,K,j,M,Ct),j.side=mn):N.renderBufferDirect(tt,B,K,j,M,Ct),M.onAfterRender(N,B,tt,K,j,Ct)}function Je(M,B,tt){B.isScene!==!0&&(B=Te);let K=O.get(M),j=w.state.lights,Ct=w.state.shadowsArray,Ut=j.state.version,It=Et.getParameters(M,j.state,Ct,B,tt,w.state.lightProbeGridArray),Bt=Et.getProgramCacheKey(It),Ht=K.programs;K.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,K.fog=B.fog;let re=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;K.envMap=yt.get(M.envMap||K.environment,re),K.envMapRotation=K.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Ht===void 0&&(M.addEventListener("dispose",en),Ht=new Map,K.programs=Ht);let le=Ht.get(Bt);if(le!==void 0){if(K.currentProgram===le&&K.lightsStateVersion===Ut)return wr(M,It),le}else It.uniforms=Et.getUniforms(M),q!==null&&M.isNodeMaterial&&q.build(M,tt,It),M.onBeforeCompile(It,N),le=Et.acquireProgram(It,Bt),Ht.set(Bt,le),K.uniforms=It.uniforms;let zt=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(zt.clippingPlanes=qt.uniform),wr(M,It),K.needsLights=Ti(M),K.lightsStateVersion=Ut,K.needsLights&&(zt.ambientLightColor.value=j.state.ambient,zt.lightProbe.value=j.state.probe,zt.sunLights.value=j.state.sun,zt.sunLightShadows.value=j.state.sunShadow,zt.directionalLights.value=j.state.directional,zt.directionalLightShadows.value=j.state.directionalShadow,zt.spotLights.value=j.state.spot,zt.spotLightShadows.value=j.state.spotShadow,zt.rectAreaLights.value=j.state.rectArea,zt.ltc_1.value=j.state.rectAreaLTC1,zt.ltc_2.value=j.state.rectAreaLTC2,zt.pointLights.value=j.state.point,zt.pointLightShadows.value=j.state.pointShadow,zt.hemisphereLights.value=j.state.hemi,zt.sunShadowMatrix.value=j.state.sunShadowMatrix,zt.sunShadowCascade.value=j.state.sunShadowCascade,zt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,zt.spotLightMatrix.value=j.state.spotLightMatrix,zt.spotLightMap.value=j.state.spotLightMap,zt.pointShadowMatrix.value=j.state.pointShadowMatrix),K.lightProbeGrid=w.state.lightProbeGridArray.length>0,K.currentProgram=le,K.uniformsList=null,le}function xn(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=Ss.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function wr(M,B){let tt=O.get(M);tt.outputColorSpace=B.outputColorSpace,tt.batching=B.batching,tt.batchingColor=B.batchingColor,tt.instancing=B.instancing,tt.instancingColor=B.instancingColor,tt.instancingMorph=B.instancingMorph,tt.skinning=B.skinning,tt.morphTargets=B.morphTargets,tt.morphNormals=B.morphNormals,tt.morphColors=B.morphColors,tt.morphTargetsCount=B.morphTargetsCount,tt.numClippingPlanes=B.numClippingPlanes,tt.numIntersection=B.numClipIntersection,tt.vertexAlphas=B.vertexAlphas,tt.vertexTangents=B.vertexTangents,tt.toneMapping=B.toneMapping}function Er(M,B){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(B.matrixWorld);for(let tt=0,K=M.length;tt<K;tt++){let j=M[tt];if(j.texture!==null&&j.boundingBox.containsPoint(b))return j}return null}function Ko(M,B,tt,K,j){B.isScene!==!0&&(B=Te),Q.resetTextureUnits();let Ct=B.fog,Ut=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?B.environment:null,It=st===null?N.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ue.workingColorSpace,Bt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ht=yt.get(K.envMap||Ut,Bt),re=K.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,le=!!tt.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),zt=!!tt.morphAttributes.position,ge=!!tt.morphAttributes.normal,Ae=!!tt.morphAttributes.color,Se=Tn;K.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Se=N.toneMapping);let y=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,D=y!==void 0?y.length:0,F=O.get(K),et=w.state.lights;if(Wt===!0&&(ie===!0||M!==it)){let jt=M===it&&K.id===Z;qt.setState(K,M,jt)}let X=!1;K.version===F.__version?(F.needsLights&&F.lightsStateVersion!==et.state.version||F.outputColorSpace!==It||j.isBatchedMesh&&F.batching===!1||!j.isBatchedMesh&&F.batching===!0||j.isBatchedMesh&&F.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&F.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&F.instancing===!1||!j.isInstancedMesh&&F.instancing===!0||j.isSkinnedMesh&&F.skinning===!1||!j.isSkinnedMesh&&F.skinning===!0||j.isInstancedMesh&&F.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&F.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&F.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&F.instancingMorph===!1&&j.morphTexture!==null||F.envMap!==Ht||K.fog===!0&&F.fog!==Ct||F.numClippingPlanes!==void 0&&(F.numClippingPlanes!==qt.numPlanes||F.numIntersection!==qt.numIntersection)||F.vertexAlphas!==re||F.vertexTangents!==le||F.morphTargets!==zt||F.morphNormals!==ge||F.morphColors!==Ae||F.toneMapping!==Se||F.morphTargetsCount!==D||!!F.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(X=!0):(X=!0,F.__version=K.version);let ot=F.currentProgram;X===!0&&(ot=Je(K,B,j),q&&K.isNodeMaterial&&q.onUpdateProgram(K,ot,F));let ht=!1,mt=!1,Ft=!1,Nt=ot.getUniforms(),$t=F.uniforms;if(x.useProgram(ot.program)&&(ht=!0,mt=!0,Ft=!0),K.id!==Z&&(Z=K.id,mt=!0),F.needsLights){let jt=Er(w.state.lightProbeGridArray,j);F.lightProbeGrid!==jt&&(F.lightProbeGrid=jt,mt=!0)}if(ht||it!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Nt.setValue(z,"projectionMatrix",M.projectionMatrix),Nt.setValue(z,"viewMatrix",M.matrixWorldInverse);let be=Nt.map.cameraPosition;be!==void 0&&be.setValue(z,ee.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&Nt.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Nt.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),it!==M&&(it=M,mt=!0,Ft=!0)}if(F.needsLights&&(et.state.sunShadowMap.length>0&&Nt.setValue(z,"sunShadowMap",et.state.sunShadowMap,Q),et.state.directionalShadowMap.length>0&&Nt.setValue(z,"directionalShadowMap",et.state.directionalShadowMap,Q),et.state.spotShadowMap.length>0&&Nt.setValue(z,"spotShadowMap",et.state.spotShadowMap,Q),et.state.pointShadowMap.length>0&&Nt.setValue(z,"pointShadowMap",et.state.pointShadowMap,Q)),j.isSkinnedMesh){Nt.setOptional(z,j,"bindMatrix"),Nt.setOptional(z,j,"bindMatrixInverse");let jt=j.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Nt.setValue(z,"boneTexture",jt.boneTexture,Q))}j.isBatchedMesh&&(Nt.setOptional(z,j,"batchingTexture"),Nt.setValue(z,"batchingTexture",j._matricesTexture,Q),Nt.setOptional(z,j,"batchingIdTexture"),Nt.setValue(z,"batchingIdTexture",j._indirectTexture,Q),Nt.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Nt.setValue(z,"batchingColorTexture",j._colorsTexture,Q));let de=tt.morphAttributes;if((de.position!==void 0||de.normal!==void 0||de.color!==void 0)&&k.update(j,tt,ot),(mt||F.receiveShadow!==j.receiveShadow)&&(F.receiveShadow=j.receiveShadow,Nt.setValue(z,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&B.environment!==null&&($t.envMapIntensity.value=B.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=v_()),mt){if(Nt.setValue(z,"toneMappingExposure",N.toneMappingExposure),F.needsLights&&Ei($t,Ft),Ct&&K.fog===!0&&Xt.refreshFogUniforms($t,Ct),Xt.refreshMaterialUniforms($t,K,nt,Y,w.state.transmissionRenderTarget[M.id]),F.needsLights&&F.lightProbeGrid){let jt=F.lightProbeGrid;$t.probesSH.value=jt.texture,$t.probesMin.value.copy(jt.boundingBox.min),$t.probesMax.value.copy(jt.boundingBox.max),$t.probesResolution.value.copy(jt.resolution)}Ss.upload(z,xn(F),$t,Q)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ss.upload(z,xn(F),$t,Q),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Nt.setValue(z,"center",j.center),Nt.setValue(z,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(z,"normalMatrix",j.normalMatrix),Nt.setValue(z,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){let jt=K.uniformsGroups;for(let be=0,We=jt.length;be<We;be++){let si=jt[be];ut.update(si,ot),ut.bind(si,ot)}}return ot}function Ei(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.sunLights.needsUpdate=B,M.sunLightShadows.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Ti(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(M,B,tt){let K=O.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),O.get(M.texture).__webglTexture=B,O.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:tt,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let tt=O.get(M);tt.__webglFramebuffer=B,tt.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,tt=0){st=M,J=B,H=tt;let K=null,j=!1,Ct=!1;if(M){let It=O.get(M);if(It.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(z.FRAMEBUFFER,It.__webglFramebuffer),rt.copy(M.viewport),St.copy(M.scissor),ft=M.scissorTest,x.viewport(rt),x.scissor(St),x.setScissorTest(ft),Z=-1;return}else if(It.__webglFramebuffer===void 0)Q.setupRenderTarget(M);else if(It.__hasExternalTextures)Q.rebindTextures(M,O.get(M.texture).__webglTexture,O.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let re=M.depthTexture;if(It.__boundDepthTexture!==re){if(re!==null&&O.has(re)&&(M.width!==re.image.width||M.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(M)}}let Bt=M.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Ct=!0);let Ht=O.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?K=Ht[B][tt]:K=Ht[B],j=!0):M.samples>0&&Q.useMultisampledRTT(M)===!1?K=O.get(M).__webglMultisampledFramebuffer:Array.isArray(Ht)?K=Ht[tt]:K=Ht,rt.copy(M.viewport),St.copy(M.scissor),ft=M.scissorTest}else rt.copy(dt).multiplyScalar(nt).floor(),St.copy(Lt).multiplyScalar(nt).floor(),ft=Kt;if(tt!==0&&(K=U),x.bindFramebuffer(z.FRAMEBUFFER,K)&&x.drawBuffers(M,K),x.viewport(rt),x.scissor(St),x.setScissorTest(ft),j){let It=O.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,It.__webglTexture,tt)}else if(Ct){let It=B;for(let Bt=0;Bt<M.textures.length;Bt++){let Ht=O.get(M.textures[Bt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Bt,Ht.__webglTexture,tt,It)}}else if(M!==null&&tt!==0){let It=O.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,It.__webglTexture,tt)}Z=-1};function Tr(M){let B=O.get(M);return(B.__readFormat!==M.format||B.__readType!==M.type)&&(B.__readFormat=M.format,B.__readType=M.type,B.__formatReadable=R.textureFormatReadable(M.format),B.__typeReadable=R.textureTypeReadable(M.type)),B}this.readRenderTargetPixels=function(M,B,tt,K,j,Ct,Ut,It=0){if(!(M&&M.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=O.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){x.bindFramebuffer(z.FRAMEBUFFER,Bt);try{let Ht=M.textures[It],re=Ht.format,le=Ht.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let zt=Tr(Ht);if(zt.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-K&&tt>=0&&tt<=M.height-j&&z.readPixels(B,tt,K,j,At.convert(re),At.convert(le),Ct)}finally{let Ht=st!==null?O.get(st).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(M,B,tt,K,j,Ct,Ut,It=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=O.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt)if(B>=0&&B<=M.width-K&&tt>=0&&tt<=M.height-j){x.bindFramebuffer(z.FRAMEBUFFER,Bt);let Ht=M.textures[It],re=Ht.format,le=Ht.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It);let zt=Tr(Ht);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ge),z.bufferData(z.PIXEL_PACK_BUFFER,Ct.byteLength,z.STREAM_READ),z.readPixels(B,tt,K,j,At.convert(re),At.convert(le),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ae=st!==null?O.get(st).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,Ae);let Se=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await mu(z,Se,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ge),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ct),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ge),z.deleteSync(Se),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,tt=0){let K=Math.pow(2,-tt),j=Math.floor(M.image.width*K),Ct=Math.floor(M.image.height*K),Ut=B!==null?B.x:0,It=B!==null?B.y:0;Q.setTexture2D(M,0),z.copyTexSubImage2D(z.TEXTURE_2D,tt,0,0,Ut,It,j,Ct),x.unbindTexture()},this.copyTextureToTexture=function(M,B,tt=null,K=null,j=0,Ct=0){let Ut,It,Bt,Ht,re,le,zt,ge,Ae,Se=M.isCompressedTexture?M.mipmaps[Ct]:M.image;if(tt!==null)Ut=tt.max.x-tt.min.x,It=tt.max.y-tt.min.y,Bt=tt.isBox3?tt.max.z-tt.min.z:1,Ht=tt.min.x,re=tt.min.y,le=tt.isBox3?tt.min.z:0;else{let $t=Math.pow(2,-j);Ut=Math.floor(Se.width*$t),It=Math.floor(Se.height*$t),M.isDataArrayTexture?Bt=Se.depth:M.isData3DTexture?Bt=Math.floor(Se.depth*$t):Bt=1,Ht=0,re=0,le=0}K!==null?(zt=K.x,ge=K.y,Ae=K.z):(zt=0,ge=0,Ae=0);let y=At.convert(B.format),D=At.convert(B.type),F;B.isData3DTexture?(Q.setTexture3D(B,0),F=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Q.setTexture2DArray(B,0),F=z.TEXTURE_2D_ARRAY):(Q.setTexture2D(B,0),F=z.TEXTURE_2D),x.activeTexture(z.TEXTURE0),x.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),x.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),x.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);let et=x.getParameter(z.UNPACK_ROW_LENGTH),X=x.getParameter(z.UNPACK_IMAGE_HEIGHT),ot=x.getParameter(z.UNPACK_SKIP_PIXELS),ht=x.getParameter(z.UNPACK_SKIP_ROWS),mt=x.getParameter(z.UNPACK_SKIP_IMAGES);x.pixelStorei(z.UNPACK_ROW_LENGTH,Se.width),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se.height),x.pixelStorei(z.UNPACK_SKIP_PIXELS,Ht),x.pixelStorei(z.UNPACK_SKIP_ROWS,re),x.pixelStorei(z.UNPACK_SKIP_IMAGES,le);let Ft=M.isDataArrayTexture||M.isData3DTexture,Nt=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let $t=O.get(M),de=O.get(B),jt=O.get($t.__renderTarget),be=O.get(de.__renderTarget);x.bindFramebuffer(z.READ_FRAMEBUFFER,jt.__webglFramebuffer),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let We=0;We<Bt;We++)Ft&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,O.get(M).__webglTexture,j,le+We),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,O.get(B).__webglTexture,Ct,Ae+We)),z.blitFramebuffer(Ht,re,Ut,It,zt,ge,Ut,It,z.DEPTH_BUFFER_BIT,z.NEAREST);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||M.isRenderTargetTexture||O.has(M)){let $t=O.get(M),de=O.get(B);x.bindFramebuffer(z.READ_FRAMEBUFFER,P),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,I);for(let jt=0;jt<Bt;jt++)Ft?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$t.__webglTexture,j,le+jt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$t.__webglTexture,j),Nt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,de.__webglTexture,Ct,Ae+jt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,de.__webglTexture,Ct),j!==0?z.blitFramebuffer(Ht,re,Ut,It,zt,ge,Ut,It,z.COLOR_BUFFER_BIT,z.NEAREST):Nt?z.copyTexSubImage3D(F,Ct,zt,ge,Ae+jt,Ht,re,Ut,It):z.copyTexSubImage2D(F,Ct,zt,ge,Ht,re,Ut,It);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Nt?M.isDataTexture||M.isData3DTexture?z.texSubImage3D(F,Ct,zt,ge,Ae,Ut,It,Bt,y,D,Se.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(F,Ct,zt,ge,Ae,Ut,It,Bt,y,Se.data):z.texSubImage3D(F,Ct,zt,ge,Ae,Ut,It,Bt,y,D,Se):M.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ct,zt,ge,Ut,It,y,D,Se.data):M.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ct,zt,ge,Se.width,Se.height,y,Se.data):z.texSubImage2D(z.TEXTURE_2D,Ct,zt,ge,Ut,It,y,D,Se);x.pixelStorei(z.UNPACK_ROW_LENGTH,et),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,X),x.pixelStorei(z.UNPACK_SKIP_PIXELS,ot),x.pixelStorei(z.UNPACK_SKIP_ROWS,ht),x.pixelStorei(z.UNPACK_SKIP_IMAGES,mt),Ct===0&&B.generateMipmaps&&z.generateMipmap(F),x.unbindTexture()},this.initRenderTarget=function(M){O.get(M).__webglFramebuffer===void 0&&Q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Q.setTextureCube(M,0):M.isData3DTexture?Q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Q.setTexture2DArray(M,0):Q.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){J=0,H=0,st=null,x.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var M_=["top","side","bottom"];function Ju(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let C of t){if(!C||typeof C.id!="string")throw new Error("block without id");if(!Number.isInteger(C.n)||C.n<0||C.n>255)throw new Error("bad n for "+C.id);if(i[C.n])throw new Error("duplicate n "+C.n+" ("+C.id+")");if(s[C.id])throw new Error("duplicate id "+C.id);let _=C.colors||{},E=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},C);if(E.placeable=E.n!==0&&!E.liquid,E.colors={top:_.top||"#888888",side:_.side||_.top||"#888888",bottom:_.bottom||_.top||"#888888"},E.opaque=E.solid&&!E.transparent&&!E.cutout,E.tile={},E.n!==0){let N={};for(let V of M_){let q=E.colors[V]+"|"+(E.pattern==="grass"||E.pattern==="log"||E.pattern==="lamp"||E.pattern==="table"||E.pattern==="stele"||E.pattern==="torch"||E.pattern==="bed"||E.pattern==="snow"||E.pattern==="lantern"||E.pattern==="bookshelf"||E.pattern==="hay"||E.pattern==="barrel"?V:"");N[q]===void 0&&(N[q]=r.length,r.push({block:E.id,face:V,color:E.colors[V],pattern:E.pattern,accent:E.accent||null,top:E.colors.top})),E.tile[V]=N[q]}}i[E.n]=E,s[E.id]=E}if(!s.air)throw new Error("registry needs air");for(let C of e){if(s[C.id])throw new Error("duplicate id "+C.id);s[C.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},C)}for(let C in s){let _=s[C].drops;if(_&&_!=="self"&&!s[_])throw new Error(C+" drops unknown "+_)}let a=C=>(typeof C=="number"?i[C]:s[C])||null,o=new Uint8Array(256),c=new Uint8Array(256),l=new Uint8Array(256),f=new Uint8Array(256),h=new Uint8Array(256),u=new Uint8Array(256),d={torch:1,cross:2,small:3,carpet:4},g=new Uint8Array(256),v=new Uint8Array(256),m=new Uint8Array(256),p=new Uint8Array(256),A=new Uint8Array(256),L=new Int16Array(256).fill(-1),b=new Int16Array(256).fill(-1),T=new Int16Array(256).fill(-1);i.forEach((C,_)=>{C&&(g[_]=C.solid?1:0,v[_]=C.opaque?1:0,m[_]=C.transparent?1:0,p[_]=C.emissive?1:0,A[_]=C.liquid?1:0,o[_]=C.light!=null?C.light:C.emissive?15:0,c[_]=C.liquid?2:0,l[_]=d[C.shape]||0,f[_]=C.cutout?1:0,h[_]=C.climbable?1:0,u[_]=C.plant?1:0,_&&(L[_]=C.tile.top,b[_]=C.tile.side,T[_]=C.tile.bottom))});let w=(n&&n.blueprints||[]).map(C=>Object.assign({kind:"blueprint"},C));return{blocks:i.filter(Boolean),items:e.map(C=>s[C.id]),blueprints:w,tiles:r,get:a,toolOf:C=>{let _=C&&s[C];return _&&_.kind==="item"&&_.tool&&typeof _.tool=="object"?_.tool:null},num:C=>{let _=s[C];if(!_||_.kind!=="block")throw new Error("no block "+C);return _.n},name:C=>{let _=a(C);return _?_.name_zh:String(C)},maxStack:C=>{let _=s[C];return _?_.maxStack:64},dropOf:C=>{let _=i[C];return!_||!_.drops?null:_.drops==="self"?_.id:_.drops},breakTime:C=>{let _=i[C];return!_||_.hardness<0?1/0:.25+_.hardness*.55},flat:{solid:g,opaque:v,trans:m,emit:p,liquid:A,tileTop:L,tileSide:b,tileBottom:T,lightEmit:o,attn:c,shape:l,cutout:f,climb:h,plant:u}}}var ei=n=>Math.floor(n/16);var _e=(n,t,e)=>(t*16+e)*16+n;var zi=(n,t)=>n+","+t;function Ec(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=ei(n),s=ei(e);return{cx:i,cz:s,i:_e(n-i*16,t,e-s*16)}}function Ku(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let a=r*r+s*s;a<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:a})}return i.sort((s,r)=>s.d2-r.d2)}function In(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var ws=(n,t,e)=>In(n,t,0,e);function S_(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Tc=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],b_=.5*(Math.sqrt(3)-1),yr=(3-Math.sqrt(3))/6;function ki(n){let t=S_(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),a=e[s];e[s]=e[r],e[r]=a}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let a=(s+r)*b_,o=Math.floor(s+a),c=Math.floor(r+a),l=(o+c)*yr,f=s-(o-l),h=r-(c-l),u=f>h?1:0,d=1-u,g=f-u+yr,v=h-d+yr,m=f-1+2*yr,p=h-1+2*yr,A=o&255,L=c&255,b=0,T,w;return T=.5-f*f-h*h,T>0&&(w=Tc[i[A+i[L]]&7],T*=T,b+=T*T*(w[0]*f+w[1]*h)),T=.5-g*g-v*v,T>0&&(w=Tc[i[A+u+i[L+d]]&7],T*=T,b+=T*T*(w[0]*g+w[1]*v)),T=.5-m*m-p*p,T>0&&(w=Tc[i[A+1+i[L+1]]&7],T*=T,b+=T*T*(w[0]*m+w[1]*p)),70*b}}function Vi(n,t,e,i){let s=1,r=1,a=0,o=0;for(let c=0;c<i;c++)a+=s*n(t*r,e*r),o+=s,s*=.5,r*=2;return a/o}function Ac(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),a=Math.floor(i),o=Math.floor(s),c=t(e-r),l=t(i-a),f=t(s-o),h=(d,g,v)=>In(n,r+d,a+g,o+v),u=(d,g,v)=>d+(g-d)*v;return u(u(u(h(0,0,0),h(1,0,0),c),u(h(0,1,0),h(1,1,0),c),l),u(u(h(0,0,1),h(1,0,1),c),u(h(0,1,1),h(1,1,1),c),l),f)}}var Es=160,Pn=18,Cc=[[0,1],[-1,0],[0,-1],[1,0]];function ju(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var w_=(n,t,e)=>e&1?[t,n]:[n,t];function Qu(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function a(c,l){let f=c+","+l;if(i.has(f))return i.get(f);let h=null,u=d=>In(n+909,c,d,l);if(u(0)<.45&&e&&e.houses&&e.houses.length){let d=Math.floor((c+.2+u(1)*.6)*Es),g=Math.floor((l+.2+u(2)*.6)*Es),v=t.biomeOf(d,g),m=t.height(d,g),p=(v==="plains"||v==="desert")&&Math.hypot(d,g)>110;if(p&&m>s+1)for(let A=0;A<16&&p;A++)for(let L of[7,14]){let b=t.height(d+Math.round(Math.cos(A*.39)*L),g+Math.round(Math.sin(A*.39)*L));(Math.abs(b-m)>3||b<=s)&&(p=!1)}else p=!1;if(p){let A=[],L=[],b=3+Math.floor(u(3)*4),T=(w,C,_,E)=>{let N=r[w];if(!N)return null;let[V,q]=w_(N.size[0],N.size[2],E),U={tpl:w,rot:E,x0:C-(V>>1),z0:_-(q>>1),y:m,w:V,d:q,h:N.size[1]};return A.push(U),U};T("well",d,g,0),T("lamp_post",d+3,g+3,0),T("lamp_post",d-3,g-3,0);for(let w=0;w<b;w++){let C=w/b*Math.PI*2+u(10+w)*.5,_=9+u(20+w)*3,E=d+Math.round(Math.cos(C)*_),N=g+Math.round(Math.sin(C)*_),V=d-E,q=g-N,U=0,P=-1/0;Cc.forEach((rt,St)=>{let ft=rt[0]*V+rt[1]*q;ft>P&&(P=ft,U=St)});let I=e.houses[Math.floor(u(30+w)*e.houses.length)],J=T(I,E,N,U);if(!J)continue;let H=r[I],[st,Z]=ju(H.door[0],H.door[1],H.size[0],H.size[2],U),it={x:J.x0+st+Cc[U][0],z:J.z0+Z+Cc[U][1]};L.push({ax:d,az:g,bx:it.x,bz:it.z})}h={id:f,x:d,z:g,y:m,biome:v,structures:A,paths:L,villagers:2+Math.floor(u(4)*3)}}}return i.set(f,h),h}function o(c,l,f,h){let u=[];for(let d=Math.floor((l-Pn)/Es);d<=Math.floor((h+Pn)/Es);d++)for(let g=Math.floor((c-Pn)/Es);g<=Math.floor((f+Pn)/Es);g++){let v=a(g,d);v&&v.x+Pn>=c&&v.x-Pn<=f&&v.z+Pn>=l&&v.z-Pn<=h&&u.push(v)}return u}return{plan:a,around:o,chunk:(c,l)=>o(c*16,l*16,c*16+16-1,l*16+16-1)}}function tf(n,t,e,i,s,r,a){let o=t*16,c=e*16,l=(g,v)=>g>=o&&g<o+16&&v>=c&&v<c+16,f=i.biome==="desert",h=f?s.desert||{}:{},u=g=>{let v=s.palette[g];if(!v)return null;let m=h[v]||v;return r.byId(m)},d=f?r.byId("sandstone"):r.byId("cobblestone");for(let g of i.paths){let v=Math.max(Math.abs(g.bx-g.ax),Math.abs(g.bz-g.az));for(let m=0;m<=v;m++){let p=Math.round(g.ax+(g.bx-g.ax)*m/v),A=Math.round(g.az+(g.bz-g.az)*m/v);if(!l(p,A))continue;let L=a.height(p,A),b=_e(p-o,L,A-c);n[b]&&n[b]!==r.water&&(n[b]=r.path);for(let T=L+1;T<Math.min(64,L+4);T++){let w=_e(p-o,T,A-c);(n[w]===r.leaves||n[w]===r.log||T===L+1)&&(n[w]=0)}}}for(let g of i.structures){let v=s.templates[g.tpl];if(!v)continue;let[m,,p]=v.size;for(let A=0;A<p;A++)for(let L=0;L<m;L++){let[b,T]=ju(L,A,m,p,g.rot),w=g.x0+b,C=g.z0+T;if(!l(w,C))continue;let _=w-o,E=C-c;for(let N=g.y-1;N>Math.max(0,g.y-8);N--){let V=_e(_,N,E);if(n[V]&&n[V]!==r.water)break;n[V]=d}for(let N=g.y+v.size[1];N<Math.min(64,g.y+v.size[1]+3);N++)n[_e(_,N,E)]=0;v.layers.forEach((N,V)=>{let q=(N[A]||"")[L];if(!q||q===" ")return;let U=g.y+V;U>=64||(n[_e(_,U,E)]=q==="."?0:u(q)||0)})}}}var rn=24;var nf={ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},ef=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3}],Ts=112;function sf(n,t,e){let i=U=>t.num(U),s=U=>{try{return i(U)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s;let a=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let o=ki(n),c=ki(n+101),l=ki(n+202),f=ki(n+303),h=ki(n+404),u=Ac(n+505),d=Ac(n+606);function g(U,P){let I=Vi(o,U/190,P/190,3),J=Vi(c,U/55,P/55,4),H=Math.max(0,Vi(l,U/130,P/130,2)-.1),st=27+I*9+J*6+H*H*75;return Math.max(4,Math.min(54,Math.floor(st)))}let v=ki(n+808);function m(U,P){let I=g(U,P),J=Vi(v,U/900,P/900,2),H=Math.min(1,Math.max(0,(Math.hypot(U,P)-240)/80)),st=Math.min(1,Math.max(0,(-.18-J)/.17)),Z=st*st*(3-2*st)*H;return Z>0&&(I=Math.round(I*(1-Z)+(rn-14)*Z)),I<rn-1?Math.max(3,Math.floor(rn-1-(rn-1-I)*1.8)):I}function p(U,P){let I=(ws(n+3,U,P)-.5)*.025;return{t:Vi(f,U/420,P/420,2)+I,u:Vi(h,U/380,P/380,2)-I}}function A(U,P,I=m(U,P)){if(I<rn-1)return"ocean";let{t:J,u:H}=p(U,P);return J<-.3?"snow":J>.28&&H<.05?"desert":H>.12?"forest":"plains"}let L=null;function b(){if(L)return L;let U=(P,I)=>{let J=m(P,I);return J>=rn+2&&Math.abs(m(P+1,I)-J)<2&&Math.abs(m(P,I+1)-J)<2};for(let P=0;P<400;P+=2)for(let I=0;I<Math.max(1,P*2);I++){let J=I/Math.max(1,P*2)*Math.PI*2,H=Math.round(Math.cos(J)*P),st=Math.round(Math.sin(J)*P);if(U(H,st)&&U(H+3,st+2))return L={x:H+.5,y:m(H,st)+1,z:st+.5,stele:{x:H+3,y:m(H+3,st+2)+1,z:st+2},portal:{x:H-3,y:Math.max(rn+1,m(H-3,st+2))+1,z:st+2}},L}return L={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},L}function T(U,P){let I=[],J=U*16,H=P*16,st=Math.floor((J-80)/Ts),Z=Math.floor((J+16+80)/Ts),it=Math.floor((H-80)/Ts),rt=Math.floor((H+16+80)/Ts);for(let St=it;St<=rt;St++)for(let ft=st;ft<=Z;ft++){let xt=pt=>In(n+707,ft,pt,St);if(xt(0)>.25)continue;let _t=(ft+xt(1))*Ts,gt=(St+xt(2))*Ts,Y=xt(3)*Math.PI,nt=40+xt(4)*30;I.push({ax:_t-Math.cos(Y)*nt/2,az:gt-Math.sin(Y)*nt/2,dx:Math.cos(Y)*nt,dz:Math.sin(Y)*nt,len:nt,floor:7+Math.floor(xt(5)*6),w:1.6+xt(6)*1.2})}return I}function w(U,P){let I=new Uint8Array(16384),J=U*16,H=P*16,st=18,Z=new Int16Array(st*st);for(let _t=-1;_t<=16;_t++)for(let gt=-1;gt<=16;gt++)Z[(_t+1)*st+gt+1]=m(J+gt,H+_t);let it=b(),rt=new Array(256);for(let _t=0;_t<16;_t++)for(let gt=0;gt<16;gt++){let Y=J+gt,nt=H+_t,pt=Z[(_t+1)*st+gt+1],Pt=Math.max(Math.abs(Z[(_t+1)*st+gt]-pt),Math.abs(Z[(_t+1)*st+gt+2]-pt),Math.abs(Z[_t*st+gt+1]-pt),Math.abs(Z[(_t+2)*st+gt+1]-pt))>=3,dt=rt[_t*16+gt]=A(Y,nt,pt),Lt=pt<=rn+1,Kt,Ot;dt==="ocean"||Lt||dt==="desert"?(Kt=r.sand,Ot=r.sand):Pt?(Kt=r.stone,Ot=r.stone):dt==="snow"?(Kt=r.snow,Ot=r.dirt):(Kt=r.grass,Ot=r.dirt);for(let Wt=0;Wt<=pt;Wt++){let ie;if(Wt===0?ie=r.bedrock:Wt===pt?ie=Kt:Wt>=pt-3?ie=Ot:dt==="desert"&&Wt>=pt-7?ie=r.sandstone:ie=r.stone,ie===r.stone&&Pt&&Wt>=pt-4){let Vt=In(n,Y,Wt,nt);Vt<.06?ie=r.coal:Vt<.09?ie=r.iron:Vt<.096&&(ie=r.ruby)}I[_e(gt,Wt,_t)]=ie}for(let Wt=pt+1;Wt<=rn;Wt++)I[_e(gt,Wt,_t)]=Wt===rn&&dt==="snow"?r.ice:r.water}C(I,U,P,Z,st);for(let _t=0;_t<ef.length;_t++){let gt=ef[_t],Y=r[gt.ore];for(let nt=0;nt<gt.count;nt++){let pt=Kt=>In(n+31*_t+Kt,U*977+nt,Kt,P*131+nt);if(pt(9)>gt.chance)continue;let Pt=Math.floor(pt(1)*16),dt=gt.y0+Math.floor(pt(2)*(gt.y1-gt.y0)),Lt=Math.floor(pt(3)*16);for(let Kt=0;Kt<gt.size;Kt++){Pt>=0&&Pt<16&&Lt>=0&&Lt<16&&dt>0&&dt<64&&I[_e(Pt,dt,Lt)]===r.stone&&(I[_e(Pt,dt,Lt)]=Y);let Ot=Math.floor(pt(10+Kt)*6);Ot===0?Pt++:Ot===1?Pt--:Ot===2?dt++:Ot===3?dt--:Ot===4?Lt++:Lt--}}}let St=e?q.chunk(U,P):[];_(I,U,P,Z,st,rt,it,St);for(let _t of St)tf(I,U,P,_t,e,r,V);let ft=it.stele;if(Math.floor(ft.x/16)===U&&Math.floor(ft.z/16)===P){let _t=ft.x-J,gt=ft.z-H;I[_e(_t,ft.y,gt)]=r.stele,I[_e(_t,ft.y+1,gt)]=r.stele}let xt=it.portal;if(r.portal&&xt&&Math.floor(xt.x/16)===U&&Math.floor(xt.z/16)===P){let _t=xt.x-J,gt=xt.z-H;for(let Y=Math.max(1,xt.y-3);Y<xt.y;Y++)(!I[_e(_t,Y,gt)]||I[_e(_t,Y,gt)]===r.water)&&(I[_e(_t,Y,gt)]=r.stone);I[_e(_t,xt.y,gt)]=r.portal,I[_e(_t,xt.y+1,gt)]=r.portal}return I}function C(U,P,I,J,H){let st=P*16,Z=I*16,it=4,rt=16/it+1,St=64/it+1,ft=new Float32Array(rt*rt*St);for(let gt=0;gt<St;gt++)for(let Y=0;Y<rt;Y++)for(let nt=0;nt<rt;nt++){let pt=st+nt*it,Pt=gt*it,dt=Z+Y*it,Lt=u(pt/22,Pt/14,dt/22)-.5,Kt=d(pt/22,Pt/14,dt/22)-.5;ft[(gt*rt+Y)*rt+nt]=Lt*Lt+Kt*Kt}let xt=(gt,Y,nt)=>ft[(Y*rt+nt)*rt+gt],_t=T(P,I);for(let gt=0;gt<16;gt++)for(let Y=0;Y<16;Y++){let nt=J[(gt+1)*H+Y+1],pt=nt<=rn+1,Pt=pt?nt-5:nt,dt=Y>>2,Lt=gt>>2,Kt=(Y&3)/it,Ot=(gt&3)/it;for(let Vt=3;Vt<=Pt;Vt++){let ee=Vt>>2,we=(Vt&3)/it,Te=xt(dt,ee,Lt)+(xt(dt+1,ee,Lt)-xt(dt,ee,Lt))*Kt,pe=xt(dt,ee,Lt+1)+(xt(dt+1,ee,Lt+1)-xt(dt,ee,Lt+1))*Kt,ve=xt(dt,ee+1,Lt)+(xt(dt+1,ee+1,Lt)-xt(dt,ee+1,Lt))*Kt,z=xt(dt,ee+1,Lt+1)+(xt(dt+1,ee+1,Lt+1)-xt(dt,ee+1,Lt+1))*Kt;if((Te+(pe-Te)*Ot)*(1-we)+(ve+(z-ve)*Ot)*we<.008){let he=_e(Y,Vt,gt);U[he]!==r.bedrock&&U[he]!==r.water&&(U[he]=0)}}if(!_t.length||pt)continue;let Wt=st+Y,ie=Z+gt;for(let Vt of _t){let ee=Math.max(0,Math.min(1,((Wt-Vt.ax)*Vt.dx+(ie-Vt.az)*Vt.dz)/(Vt.len*Vt.len))),we=Vt.ax+Vt.dx*ee,Te=Vt.az+Vt.dz*ee,pe=Math.hypot(Wt-we,ie-Te),ve=Vt.w*Math.sin(Math.PI*ee);if(pe<ve)for(let z=Vt.floor+Math.floor(pe*2);z<=nt;z++){let Ie=_e(Y,z,gt);U[Ie]!==r.water&&(U[Ie]=0)}}}}function _(U,P,I,J,H,st,Z,it){let rt=P*16,St=I*16;for(let ft=0;ft<16;ft++)for(let xt=0;xt<16;xt++){let _t=rt+xt,gt=St+ft,Y=J[(ft+1)*H+xt+1],nt=st[ft*16+xt];if(Y+1>=64||Math.hypot(_t-Z.x,gt-Z.z)<48)continue;let pt=U[_e(xt,Y,ft)],Pt=_e(xt,Y+1,ft);if(U[Pt])continue;let dt=ws(n+11,_t,gt),Lt=ws(n+13,_t,gt);pt===r.grass?dt<.012&&a.length?U[Pt]=a[Math.floor(Lt*a.length)]:dt<(nt==="plains"?.1:.05)&&r.tallgrass?U[Pt]=r.tallgrass:nt==="forest"&&dt<.08&&r.fern?U[Pt]=r.fern:nt==="forest"&&dt<.084&&r.mushR&&(U[Pt]=Lt<.5?r.mushR:r.mushB):pt===r.sand&&nt==="desert"&&Y>rn+1&&dt<.008&&r.deadbush&&(U[Pt]=r.deadbush)}for(let ft=2;ft<14;ft++)for(let xt=2;xt<14;xt++){let _t=rt+xt,gt=St+ft,Y=J[(ft+1)*H+xt+1],nt=st[ft*16+xt],pt=U[_e(xt,Y,ft)];if(Math.abs(_t-Z.x)<7&&Math.abs(gt-Z.z)<7||it.some(Kt=>Math.abs(_t-Kt.x)<Pn+2&&Math.abs(gt-Kt.z)<Pn+2))continue;let Pt=ws(n+7,_t,gt),dt=ws(n+9,_t,gt);if(nt==="desert"&&pt===r.sand&&Y>rn+1&&Pt<.008&&r.cactus){let Kt=1+Math.floor(dt*3);for(let Ot=Y+1;Ot<=Y+Kt&&Ot<64;Ot++)U[_e(xt,Ot,ft)]=r.cactus;continue}if(nt==="snow"&&pt===r.snow&&Pt<.02){N(U,xt,ft,Y,5+Math.floor(dt*3));continue}let Lt=nt==="forest"?.035:nt==="plains"?.003:0;pt===r.grass&&Pt<Lt&&E(U,xt,ft,Y,_t,gt,4+Math.floor(dt*2))}}function E(U,P,I,J,H,st,Z){let it=J+Z;if(!(it+2>=64)){for(let rt=it-2;rt<=it+1;rt++){let St=rt>=it?1:2;for(let ft=-St;ft<=St;ft++)for(let xt=-St;xt<=St;xt++){if(St===2&&Math.abs(xt)===2&&Math.abs(ft)===2&&In(n,H+xt,rt,st+ft)<.6)continue;let _t=_e(P+xt,rt,I+ft);U[_t]===r.air&&(U[_t]=r.leaves)}}U[_e(P,J,I)]=r.dirt;for(let rt=J+1;rt<=it;rt++)U[_e(P,rt,I)]=r.log}}function N(U,P,I,J,H){let st=J+H;if(!(st+2>=64)){for(let Z=J+2;Z<=st+1;Z++){let it=st+1-Z,rt=it>=4?2:it>=1?1:0;for(let St=-rt;St<=rt;St++)for(let ft=-rt;ft<=rt;ft++){if(rt===2&&Math.abs(ft)+Math.abs(St)>3)continue;let xt=_e(P+ft,Z,I+St);U[xt]===r.air&&(U[xt]=r.sleaves)}}U[_e(P,J,I)]=r.dirt;for(let Z=J+1;Z<=st;Z++)U[_e(P,Z,I)]=r.slog}}let V={height:m,baseHeight:g,biomeOf:A,climate:p,genChunk:w,findSpawn:b,SEA:rn},q=Qu(n,V,e);return V.villages=q,V}function bi(n,t,e,i,s,r){let a=i/2,o=Math.floor(n-a),c=Math.floor(n+a-1e-6),l=Math.floor(t),f=Math.floor(t+s-1e-6),h=Math.floor(e-a),u=Math.floor(e+a-1e-6);for(let d=l;d<=f;d++)for(let g=h;g<=u;g++)for(let v=o;v<=c;v++)if(r(v,d,g))return!0;return!1}function Uo(n,t,e,i,s={}){let r=s.w||.6,a=s.h||1.8,o=!!s.canStep,c=!1,l=0,f=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,h=Math.max(1,Math.ceil(f/.35)),u=e/h;for(let d=0;d<h;d++){let g=n.y+t.y*u;bi(n.x,g,n.z,r,a,i)&&(t.y<0?(g=Math.floor(g)+1,c=!0,bi(n.x,g,n.z,r,a,i)&&(g=n.y)):(g=Math.min(n.y,Math.ceil(g+a)-1-a),bi(n.x,g,n.z,r,a,i)&&(g=n.y)),t.y=0),n.y=g;for(let v of["x","z"]){let m=t[v]*u;if(!m)continue;let p={x:n.x,y:n.y,z:n.z};if(p[v]+=m,!bi(p.x,p.y,p.z,r,a,i)){n[v]=p[v];continue}if(o&&(c||s.grounded)){let L=Math.floor(n.y+.01)+1;if(L-n.y<=1.01&&!bi(p.x,L,p.z,r,a,i)&&!bi(n.x,L,n.z,r,a,i)){l+=L-n.y,n.y=L,n[v]=p[v];continue}}let A=r/2;n[v]=m>0?Math.floor(p[v]+A)-A-1e-4:Math.floor(p[v]-A)+1+A+1e-4,bi(n.x,n.y,n.z,r,a,i)&&(n[v]=p[v]-m),t[v]=0}}return!c&&t.y<=0&&bi(n.x,n.y-.02,n.z,r,a,i)&&(c=!0),{onGround:c,stepped:l}}function Fo(n,t,e,i,s){let r=Math.floor(n.x),a=Math.floor(n.y),o=Math.floor(n.z),c=Math.sign(t.x),l=Math.sign(t.y),f=Math.sign(t.z),h=c?Math.abs(1/t.x):1/0,u=l?Math.abs(1/t.y):1/0,d=f?Math.abs(1/t.z):1/0,g=c?(c>0?r+1-n.x:n.x-r)*h:1/0,v=l?(l>0?a+1-n.y:n.y-a)*u:1/0,m=f?(f>0?o+1-n.z:n.z-o)*d:1/0,p=[0,0,0],A=0;for(;A<=e;){let L=i(r,a,o);if(L&&s(L))return{x:r,y:a,z:o,n:L,face:p,dist:A};g<v&&g<m?(r+=c,A=g,g+=h,p=[-c,0,0]):v<m?(a+=l,A=v,v+=u,p=[0,-l,0]):(o+=f,A=m,m+=d,p=[0,0,-f])}return null}var Uc={};Qo(Uc,{HOTBAR:()=>Ic,SIZE:()=>Rc,add:()=>an,canAdd:()=>Mr,count:()=>Ln,craft:()=>Nc,craftable:()=>zo,createInventory:()=>Oo,deserialize:()=>Dc,moveSlot:()=>Lc,remove:()=>vr,serialize:()=>Bo,takeFromSlot:()=>Pc});var Rc=36,Ic=9;function Oo(n=36){return{slots:new Array(n).fill(null)}}function an(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let a=n.slots[r];if(a&&a.id===t&&a.count<s){let o=Math.min(e,s-a.count);a.count+=o,e-=o}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let a=Math.min(e,s);n.slots[r]={id:t,count:a},e-=a}return e}function Ln(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function vr(n,t,e){if(Ln(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function Pc(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Lc(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let a=Math.min(s.count,i(s.id)-r.count);r.count+=a,s.count-=a,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Mr(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return an(s,t,e,i)===0}var Bo=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function Dc(n,t=36){let e=Oo(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function zo(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(Ln(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function Nc(n,t,e=()=>64,i){let s=zo(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(a=>a&&{...a});for(let a in t.in)vr(n,a,t.in[a]);return an(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function T_(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var As=(n,t)=>n.owned.includes(t),rf=(n,t)=>n?t?2:1:0;function Gi(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Sr(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function af(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function of(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&As(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(Sr(n,e.price),n.owned.push(e.id),{ok:!0}):Mr(t,e.id,e.qty,i)?(Sr(n,e.price),an(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var lf=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function cf(n){let t=T_(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function C_(){return new Map}function hf(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Fc(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function R_(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function uf(n){let t=C_();for(let e in n||{})t.set(e,R_(n[e]));return t}var ko=16;var eS=18;var ii=32;function ff(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ue=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],Mt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function I_(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function oe(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function ni(n,t,e,i,s){let r=3+Math.floor(t()*2),a=[];for(let o=0;o<r;o++){let c=o/r*Math.PI*2+t()*.8;a.push([e+Math.cos(c)*s*(.6+t()*.5),i+Math.sin(c)*s*(.6+t()*.5)])}oe(n,a)}var P_=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open"]);function L_(n,t){let e=Ue(t.color),i=ff(I_(t.block+t.face)),s=ii;if(P_.has(t.pattern)){D_(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=Mt(e,1,r),n.fillRect(0,0,s,s);let a=t.pattern,o=t.accent?Ue(t.accent):null;if(a==="grass"&&t.face==="top"){n.fillStyle=Mt(e,1.12);for(let h=0;h<4;h++)ni(n,i,i()*s,i()*s,5+i()*4)}if(a==="snow"&&t.face==="top"){n.fillStyle=Mt(e,.96);for(let h=0;h<4;h++)ni(n,i,i()*s,i()*s,4+i()*4)}if((a==="grass"||a==="snow")&&t.face==="side"){let h=Ue(t.top);n.fillStyle=Mt(h);let u=[[0,0],[s,0]];for(let d=s;d>=0;d-=4)u.push([d,8+Math.round(i()*5)]);oe(n,u)}if(a==="stone"||a==="bedrock")for(let h=0;h<5;h++)n.fillStyle=Mt(e,i()<.5?.9:1.08),ni(n,i,i()*s,i()*s,4+i()*6);if(a==="ore"){for(let h=0;h<4;h++)n.fillStyle=Mt(e,.92),ni(n,i,i()*s,i()*s,5);n.fillStyle=Mt(o);for(let h=0;h<5;h++)ni(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(a==="sand")for(let h=0;h<26;h++)n.fillStyle=Mt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(a==="log"&&t.face==="side")for(let h=3;h<s;h+=7)n.fillStyle=Mt(e,.82),n.fillRect(h,0,2,s);if(a==="log"&&t.face!=="side"&&(n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=Mt(e,1.05),n.fillRect(11,11,s-22,s-22)),a==="leaves")for(let h=0;h<9;h++)n.fillStyle=Mt(e,i()<.5?.78:1.15),ni(n,i,i()*s,i()*s,3+i()*4);if(a==="planks"||a==="table"&&t.face==="bottom"){for(let h=7;h<s;h+=8)n.fillStyle=Mt(e,.78),n.fillRect(0,h,s,1);n.fillStyle=Mt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(a==="table"&&t.face==="top"&&(n.fillStyle=Mt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),a==="table"&&t.face==="side"&&(n.fillStyle=Mt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=Mt([185,182,174]),oe(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=Mt(e,.6),n.fillRect(21,14,2,10)),a==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",oe(n,[[6,24],[9,24],[24,9],[24,6]])),a==="water"){n.fillStyle=Mt(e,1.18,.72);for(let h=6;h<s;h+=10)n.fillRect(4+Math.floor(i()*10),h,10,2)}if(a==="gold"&&(n.fillStyle=Mt(e,1.15),oe(n,[[0,0],[s,0],[0,s]]),n.fillStyle=Mt(e,.9),oe(n,[[s,s],[s,8],[8,s]])),a==="lamp"&&(t.face==="side"?(n.fillStyle=Mt(Ue("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=Mt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=Mt(e,1.05),n.fillRect(8,8,s-16,s-16))),a==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=Mt(Ue("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=Mt(Ue("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=Mt(o),n.fillRect(14,0,4,4)):(n.fillStyle=Mt(Ue(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),a==="bed"&&(t.face==="top"?(n.fillStyle=Mt(o),n.fillRect(0,0,s,10),n.fillStyle=Mt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=Mt(Ue("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=Mt(o),n.fillRect(0,0,9,14))),a==="wool")for(let h=0;h<7;h++)n.fillStyle=Mt(e,i()<.5?.94:1.04),ni(n,i,i()*s,i()*s,4+i()*4);if(a==="portal"&&(n.fillStyle=Mt(o),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(o,1.3),oe(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=Mt(Ue("#EFEBDD"),1,.8),oe(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=Mt(o),n.fillRect(s/2-3,s/2-3,6,6)),a==="sandstone")for(let h=8;h<s;h+=9)n.fillStyle=Mt(e,.9),n.fillRect(0,h,s,2);if(a==="cactus")if(t.face==="side"){for(let h=4;h<s;h+=8)n.fillStyle=Mt(e,.82),n.fillRect(h,0,2,s);n.fillStyle=Mt(Ue("#EFEBDD"),1,.7);for(let h=0;h<6;h++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12);if(a==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",oe(n,[[4,22],[8,22],[22,6],[18,6]])),a==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",oe(n,[[6,24],[9,24],[24,9],[24,6]])),a==="paper"&&(n.fillStyle=Mt(e,1.1),oe(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=Mt(e,.92),oe(n,[[s,s],[s*.45,s],[s,s*.4]])),a==="stonebricks"||a==="mossy"&&t.block.includes("bricks")||a==="cracked"){n.fillStyle=Mt(e,.78);for(let h=0;h<s;h+=8){n.fillRect(0,h+7,s,1);let u=h/8%2?0:8;for(let d=u;d<s;d+=16)n.fillRect(d,h,1,8)}}if(a==="mossy"){n.fillStyle=Mt(o);for(let h=0;h<6;h++)ni(n,i,i()*s,i()*s,3+i()*4)}if(a==="cracked"&&(n.fillStyle=Mt(e,.6),oe(n,[[4,2],[12,14],[10,15],[3,4]]),oe(n,[[20,18],[29,30],[27,31],[19,20]])),a==="chiseled"&&(n.fillStyle=Mt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=Mt(e,.85),n.fillRect(13,13,s-26,s-26)),a==="smooth"&&(n.fillStyle=Mt(e,.9),n.fillRect(0,s/2,s,1)),a==="polished"&&(n.fillStyle=Mt(e,1.08),oe(n,[[0,0],[s*.6,0],[0,s*.6]])),a==="bricks"){n.fillStyle=Mt(Ue("#D9CBB5"));for(let h=0;h<s;h+=8){n.fillRect(0,h+6,s,2);let u=h/8%2?0:8;for(let d=u;d<s;d+=16)n.fillRect(d,h,2,6)}}if(a==="checker"&&(n.fillStyle=Mt(o),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),a==="bookshelf"&&t.face==="side"){let h=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let u of[3,18]){let d=3;for(;d<s-4;){let g=3+Math.floor(i()*3);n.fillStyle=h[Math.floor(i()*h.length)],n.fillRect(d,u+Math.floor(i()*3),g,11),d+=g+1}}n.fillStyle=Mt(e,.7),n.fillRect(0,15,s,2)}if(a==="bookshelf"&&t.face!=="side")for(let h=7;h<s;h+=8)n.fillStyle=Mt(e,.8),n.fillRect(0,h,s,1);if(a==="hay")if(t.face==="side"){for(let h=3;h<s;h+=5)n.fillStyle=Mt(e,.88),n.fillRect(h,0,1,s);n.fillStyle=Mt(Ue("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=Mt(e,.9),n.fillRect(8,8,s-16,s-16);if(a==="barrel")if(t.face==="side"){for(let h=5;h<s;h+=6)n.fillStyle=Mt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=Mt(Ue("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=Mt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=Mt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(a==="crate"&&(n.fillStyle=Mt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),oe(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),a==="door"){for(let h=7;h<s;h+=8)n.fillStyle=Mt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=Mt(Ue("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=Mt(Ue("#26302A")),n.fillRect(24,17,3,3)}if(a==="lantern"&&(t.face==="side"?(n.fillStyle=Mt(o),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=Mt(e),n.fillRect(0,0,s,s),n.fillStyle=Mt(Ue("#F2C46B")),n.fillRect(12,12,8,8))),a==="furnace"){for(let h=0;h<4;h++)n.fillStyle=Mt(e,i()<.5?.9:1.08),ni(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=Mt(o),n.fillRect(8,15,s-16,11),n.fillStyle=Mt(Ue("#E0352B"),1,.85),oe(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=Mt(e,.8),n.fillRect(9,9,s-18,s-18))}a==="stele"&&t.face==="side"&&(n.fillStyle=Mt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=Mt(o),oe(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let c=n.getImageData(0,0,s,s),l=c.data;for(let h=0;h<l.length;h+=4){let u=1+(i()-.5)*.09;l[h]=Math.min(255,l[h]*u),l[h+1]=Math.min(255,l[h+1]*u),l[h+2]=Math.min(255,l[h+2]*u)}n.putImageData(c,0,0);let f=a==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=f,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),a!=="glass"&&a!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function df(n){let t=document.createElement("canvas");t.width=t.height=ii*ko;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let a=document.createElement("canvas");a.width=a.height=ii;let o=a.getContext("2d",{willReadFrequently:!0});L_(o,s),e.drawImage(a,r%ko*ii,Math.floor(r/ko)*ii),i[r]=a}),{canvas:t,tileCanvas:i}}function pf(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",oe(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",oe(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let a=t.tileCanvas,o=1/ii,c=(l,f,h,u,d,g,v,m)=>{r.setTransform(f*o,h*o,u*o,d*o,g,v),r.drawImage(a[l],0,0),m&&(r.fillStyle=`rgba(20,24,20,${m})`,r.fillRect(0,0,ii,ii))};c(i.tile.top,20,10,-20,10,24,4,0),c(i.tile.side,20,10,0,22,4,14,.12),c(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),a=i.icon,o=i.color,c="#8C6640";r.save(),r.translate(24,24),a==="lump"?(r.fillStyle=o,oe(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",oe(r,[[-8,-12],[6,-14],[2,-4]])):a==="ingot"?(r.fillStyle=o,oe(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",oe(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4)):a==="hide"?(r.fillStyle=o,oe(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",oe(r,[[-6,-4],[6,-6],[4,6],[-5,5]])):a==="feather"?(r.rotate(-Math.PI/4),r.fillStyle=o,oe(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32)):a==="dye"?(r.fillStyle=o,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill()):a==="gem"?(r.fillStyle=o,oe(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",oe(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=a==="stick"?o:c,r.fillRect(-3,-14,6,32),r.fillStyle=o,a==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),a==="axe"&&oe(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),a==="shovel"&&oe(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),a==="sword"&&(r.fillRect(-4,-24,8,30),oe(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=c,r.fillRect(-9,6,18,4))),r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",oe(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let a=0;a<4;a++)r.fillRect(12,14+a*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",oe(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function mf(){let n=ff(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=ii;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let a=0;a<3+i*2;a++){let o=6+n()*20,c=6+n()*20,l=n()*Math.PI;oe(r,[[o,c],[o+Math.cos(l)*9,c+Math.sin(l)*9],[o+Math.cos(l+.3)*6,c+Math.sin(l+.3)*6]])}e.push(s),t.push(s)}return t}function D_(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,a=t.accent?Ue(t.accent):e,o=(c,l,f)=>{n.fillStyle=f,n.fillRect(c,s-l,2,l)};if(r==="flower"){o(15,18,Mt(e)),n.fillStyle=Mt(e,1.1),oe(n,[[16,26],[9,20],[15,22]]),oe(n,[[17,24],[24,18],[18,21]]),n.fillStyle=Mt(a);for(let c=0;c<5;c++){let l=c/5*Math.PI*2;oe(n,[[16,9],[16+Math.cos(l)*7,9+Math.sin(l)*7],[16+Math.cos(l+.6)*7,9+Math.sin(l+.6)*7]])}n.fillStyle=Mt(Ue("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let c=0;c<6;c++){let l=4+c*4+Math.floor(i()*2),f=14+Math.floor(i()*14);n.fillStyle=Mt(e,i()<.5?.9:1.1),oe(n,[[l,s],[l+3,s],[l+1+(r==="fern"?2:0),s-f]])}else if(r==="deadbush")n.strokeStyle=Mt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=Mt(e),n.fillRect(14,18,4,14),n.fillStyle=Mt(a),oe(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=Mt(Ue("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=Mt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=Mt(e,1.12);for(let c=3;c<s;c+=7)n.fillRect(5,c,s-10,3)}else r==="door_open"&&(n.fillStyle=Mt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var gf=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,_f=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function N_(n,t){let e=ei(n),i=ei(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){if(!a&&!r)continue;let o=(e+a)*16,c=(i+r)*16,l=n<o?o-n:n>=o+16?n-(o+16-1):0,f=t<c?c-t:t>=c+16?t-(c+16-1):0;Math.max(l,f)<=14&&s.push([e+a,i+r])}return s}function yf(n){let t=new Vn(n);t.magFilter=Ne,t.minFilter=Ne,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new $(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new $e({uniforms:e,vertexShader:gf,fragmentShader:_f}),s=new $e({uniforms:e,vertexShader:gf,fragmentShader:_f,transparent:!0,depthWrite:!1,side:mn});return{opaque:i,trans:s,uniforms:e,tex:t}}function xf(n){let t=new Qe;return t.setAttribute("position",new Fe(n.pos,3)),t.setAttribute("uv",new Fe(n.uv,2)),t.setAttribute("light",new Fe(n.light,1)),t.setAttribute("lt",new Fe(n.lt,2,!0)),t.setIndex(new Fe(n.index,1)),t.computeBoundingSphere(),t}var Vo=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:a}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:a}),this.chunks=new Map,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",o=>this.onMsg(o.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=zi(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Le(xf(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Le(xf(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}update(t,e){let i=ei(t),s=ei(e),r=Ku(i,s,this.rd);for(let c of r){if(this.inflight>=this.maxInflight)break;let l=zi(c.cx,c.cz);if(this.chunks.has(l))continue;let f={cx:c.cx,cz:c.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(l,f),this.inflight++,this.worker.postMessage({type:"load",cx:c.cx,cz:c.cz,rev:f.meshRev})}let a=this.rd+1.5,o=[];for(let[c,l]of this.chunks){let f=l.cx-i,h=l.cz-s;if(f*f+h*h>a*a){for(let u of["o","t"])l[u]&&(this.scene.remove(l[u]),l[u].geometry.dispose());this.chunks.delete(c),o.push(c)}}o.length&&this.worker.postMessage({type:"drop",keys:o.filter(c=>{let[l,f]=c.split(",").map(Number);return Math.abs(l-i)>this.rd+3||Math.abs(f-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(c=>c.state==="ready").length}ready(t,e){let i=this.chunks.get(zi(ei(t),ei(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Ec(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(zi(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Ec(t,e,i);if(!r)return!1;let a=zi(r.cx,r.cz),o=this.chunks.get(a);if(!o||!o.vox)return!1;o.vox[r.i]=s,hf(this.diffs,a,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let c=Math.floor(t),l=Math.floor(i);for(let[f,h]of N_(c,l)){let u=this.chunks.get(zi(f,h));u&&u.state==="ready"&&(u.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:f,cz:h,rev:u.meshRev}))}return this.onDirty&&this.onDirty(a),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var U_="hw_world";var Go=null;function vf(){return Go||(Go=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(U_,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Go)}function Oc(n,t){return vf().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),a=r.objectStore("kv"),o=t(a);r.oncomplete=()=>i(o instanceof IDBRequest?o.result:void 0),r.onerror=()=>s(r.error)}))}var Bc=n=>Oc("readonly",t=>t.get(n)),zc=n=>Oc("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function Mf(n){let t=await vf();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),a=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));a.onsuccess=()=>{let o=a.result;o&&(s[o.key]=o.value,o.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function Sf(n){let t={};for(let e of n){let i=await Bc(e);i!==void 0&&(t[e]=i)}await Oc("readwrite",e=>e.clear()),await zc(t)}function G(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Hi=n=>document.querySelector(n);var O_="../../",B_=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],kc=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],Ho=null;function z_(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function Vc(){return Ho||(Ho=(async()=>{for(let t of B_)await z_(O_+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw Ho=null,n})),Ho}async function bf(n,{onReward:t,onClose:e,count:i=5}){n.innerHTML="",n.hidden=!1;let s=G("div",{class:"panel quiz"});n.append(s),s.append(G("div",{class:"p-head"},G("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),G("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),G("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let r;try{r=await Vc()}catch{s.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,o=[],c=0,l=0,f=0;function h(){n.hidden=!0,n.innerHTML="",e&&e()}function u(){o=r.buildQuiz({modules:["words","phrases","grammar","patterns"],types:kc,lv:1,count:i}),o.length||(o=r.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:i})),c=0,l=0,f=0,d()}function d(){s.innerHTML="";let m=o[c],p=a.isTyped(m);n._q=m;let A=G("div",{class:"fb"}),L=G("div",{class:"q-body"});s.append(G("div",{class:"p-head"},G("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",G("small",{},`\u7B2C ${c+1} / ${o.length} \u984C`)),G("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),G("div",{class:"q-type"},(a.TYPES[m.type]||"\u984C\u76EE")+(p?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),G("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?G("div",{class:"q-sub"},m.sub):null,L,A);let b=!1,T=w=>{if(b)return;b=!0;let C=rf(w,p);w&&(f++,l+=C,t&&t(C)),A.className="fb "+(w?"ok":"bad"),A.append(G("div",{},w?`\u7B54\u5C0D\u4E86\uFF01 +${C} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",w?null:G("b",{class:"en"},m.answer)),!w&&m.why?G("div",{class:"why"},m.why):null,G("button",{class:"btn",onclick:g},c+1<o.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(m.input==="type"){let w=G("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),C=()=>{b||!w.value.trim()||T(r.check(m,w.value).ok)};w.addEventListener("keydown",_=>{_.stopPropagation(),_.key==="Enter"&&C()}),L.append(G("div",{class:"typerow"},w,G("button",{class:"btn",onclick:C},"\u9001\u51FA"))),setTimeout(()=>w.focus(),50)}else{let w=G("div",{class:"opts"});(m.options||[]).forEach(C=>w.append(G("button",{class:"opt"+(/[a-z]/i.test(C)?" en":""),onclick:_=>{if(b)return;let E=r.check(m,C).ok;_.currentTarget.classList.add(E?"ok":"bad"),T(E)}},C))),L.append(w)}}function g(){c++,c<o.length?d():v()}function v(){s.innerHTML="",s.append(G("div",{class:"p-head"},G("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),G("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),G("p",{class:"big"},`\u7B54\u5C0D ${f} / ${o.length} \u984C\uFF0C\u62FF\u5230 ${l} \u91D1\u5E63`),G("div",{class:"row"},G("button",{class:"btn",onclick:u},"\u518D\u4F86\u4E00\u56DE"),G("button",{class:"btn ghost",onclick:h},"\u56DE\u53BB\u84CB\u623F\u5B50")))}u()}var k_=new Set(kc);async function wf(n,{ids:t=[],onDone:e}){n.innerHTML="",n.hidden=!1;let i=G("div",{class:"panel quiz"});n.append(i),i.append(G("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let s;try{s=await Vc()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let r=window.KE,a=null;for(let d of t){let g=s.byId[d];if(g&&k_.has(g.type)){a=s.get(d);break}}let o=!!a;a||(a=s.buildQuiz({modules:["words","phrases","grammar","patterns"],types:kc,lv:1,count:1})[0]);let c=r.isTyped(a);n._q=a,i.innerHTML="";let l=G("div",{class:"fb"}),f=G("div",{class:"q-body"});i.append(G("div",{class:"p-head"},G("h2",{},"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),G("div",{class:"q-type"},(o?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":r.TYPES[a.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),G("div",{class:"q-prompt"+(a.en?" en":"")},a.prompt),a.sub?G("div",{class:"q-sub"},a.sub):null,f,l);let h=!1,u=d=>{h||(h=!0,l.className="fb "+(d?"ok":"bad"),l.append(G("div",{},d?"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",d?null:G("b",{class:"en"},a.answer)),!d&&a.why?G("div",{class:"why"},a.why):null,G("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(d,c)}},"\u7E7C\u7E8C")))};if(a.input==="type"){let d=G("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),g=()=>{h||!d.value.trim()||u(s.check(a,d.value).ok)};d.addEventListener("keydown",v=>{v.stopPropagation(),v.key==="Enter"&&g()}),f.append(G("div",{class:"typerow"},d,G("button",{class:"btn",onclick:g},"\u9001\u51FA"))),setTimeout(()=>d.focus(),50)}else{let d=G("div",{class:"opts"});(a.options||[]).forEach(g=>d.append(G("button",{class:"opt"+(/[a-z]/i.test(g)?" en":""),onclick:v=>{if(h)return;let m=s.check(a,g).ok;v.currentTarget.classList.add(m?"ok":"bad"),u(m)}},g))),f.append(d)}}async function Ef(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=G("div",{class:"panel quiz"});n.append(i),i.append(G("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await Vc()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,a=s.buildQuiz({modules:[t.module],types:t.types,lv:t.lv,count:t.count});a.length||(a=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let o=0,c=0,l=()=>{i.innerHTML="";let f=a[o];n._q=f;let h=G("div",{class:"fb"}),u=G("div",{class:"q-body"});i.append(G("div",{class:"p-head"},G("h2",{},t.title_zh+" ",G("small",{},`\u7B2C ${o+1} / ${a.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),G("div",{class:"q-type"},r.TYPES[f.type]||"\u984C\u76EE"),G("div",{class:"q-prompt"+(f.en?" en":"")},f.prompt),f.sub?G("div",{class:"q-sub"},f.sub):null,u,h);let d=!1,g=v=>{d||(d=!0,v&&c++,h.className="fb "+(v?"ok":"bad"),h.append(G("div",{},v?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",v?null:G("b",{class:"en"},f.answer)),!v&&f.why?G("div",{class:"why"},f.why):null,G("button",{class:"btn",onclick:()=>{o++,o<a.length?l():(n.hidden=!0,n.innerHTML="",e&&e(c,a.length))}},o+1<a.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(f.input==="type"){let v=G("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),m=()=>{d||!v.value.trim()||g(s.check(f,v.value).ok)};v.addEventListener("keydown",p=>{p.stopPropagation(),p.key==="Enter"&&m()}),u.append(G("div",{class:"typerow"},v,G("button",{class:"btn",onclick:m},"\u9001\u51FA"))),setTimeout(()=>v.focus(),50)}else{let v=G("div",{class:"opts"});(f.options||[]).forEach(m=>v.append(G("button",{class:"opt"+(/[a-z]/i.test(m)?" en":""),onclick:p=>{if(d)return;let A=s.check(f,m).ok;p.currentTarget.classList.add(A?"ok":"bad"),g(A)}},m))),u.append(v)}};l()}function Tf(n,t,e){let[i,s]=String(n).split(",").map(Number),r=f=>In(4242,i|0,t*7+f,s|0),a=e.professions[Math.floor(r(1)*e.professions.length)],o=e.quests,c=Math.floor(r(2)*o.length),l=(c+1+Math.floor(r(3)*(o.length-1)))%o.length;return{prof:a,quests:[o[c],o[l]]}}function Af(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?As(n,e.blueprint)?{ok:!1,reason:"owned"}:(Sr(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Mr(t,e.give,e.count,i)?(Sr(n,e.price),an(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var Gc=(n,t,e)=>!!(n&&n[t.id]===e);function Cf(n,t,e,i,s,r,a=()=>64){if(Gc(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Gi(s,t.reward.coins|0);let o={};for(let c in t.reward.items||{}){let l=an(r,c,t.reward.items[c],a);l&&(o[c]=l)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:o}}function Rf(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var G_=[1,2,4,6,8];function Wo(n,t){if(!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/G_[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Hc(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let a=r.durability;return s.dur=(s.dur==null?a:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:a}}function If(n,t){let e=n&&t.toolOf(n.id);if(!e)return null;let i=e.durability,s=n.dur==null?i:n.dur;return{left:s,max:i,frac:s/i}}var Zc={};Qo(Zc,{collect:()=>Yc,createFurnace:()=>Wc,dismantle:()=>$c,start:()=>Xc,tick:()=>qc});function Wc(){return{fuel:0,jobs:[],done:{}}}function Xc(n,t,e,i=4){if(Ln(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(Ln(t,"coal")<1)return{ok:!1,reason:"fuel"};vr(t,"coal",1),n.fuel+=i}return vr(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function qc(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function Yc(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=an(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function $c(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var nh={};Qo(nh,{MAX_HP:()=>Xo,REGEN_EVERY:()=>W_,SAFE_FALL:()=>H_,createHealth:()=>Jc,damage:()=>jc,fallDamage:()=>Kc,hearts:()=>eh,regen:()=>Qc,respawnPoint:()=>th});var Xo=20,H_=4,W_=4;function Jc(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function Kc(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function jc(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function Qc(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function th(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function eh(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var qo={animal:8,quiz:4};function Pf(){return{list:[],nextId:1}}var Yo=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function Lf(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function Df(n,t){return n<.2&&!t}function Nf(n,t,e){return n.kind==="quiz"?t>.45||e>48:e>72}function Uf(n,t,e,i){let s=n.def,r=t.x-n.p.x,a=t.z-n.p.z,o=Math.hypot(r,a);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-a));return}if(n.home){let c=n.home.x-n.p.x,l=n.home.z-n.p.z,f=Math.hypot(c,l);if(f>10){n.yaw=Math.atan2(-c,-l),n.v.x=c/f*s.speed,n.v.z=l/f*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&o<16){n.yaw=Math.atan2(-r,-a);let c=o>1.6?s.speed:0;n.v.x=r/(o||1)*c,n.v.z=a/(o||1)*c;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function Ff(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var Of=(n,t)=>n?(t?2:1)+1:0;function Bf(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],a=[e.x+i/2,e.y+s,e.z+i/2],o=[n.x,n.y,n.z],c=[t.x,t.y,t.z],l=0,f=1/0;for(let h=0;h<3;h++){if(Math.abs(c[h])<1e-9){if(o[h]<r[h]||o[h]>a[h])return null;continue}let u=(r[h]-o[h])/c[h],d=(a[h]-o[h])/c[h];if(u>d&&([u,d]=[d,u]),l=Math.max(l,u),f=Math.min(f,d),l>f)return null}return l}function zf(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var kf=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function Vf(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function Gf(n,t,e,i,s=()=>64){let r=(t||[]).find(l=>l.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let a=r.reward.coins|0,o=Object.assign({},r.reward.items),c={};Gi(i,a);for(let l in o){let f=an(e,l,o[l],s);f&&(c[l]=f)}return{ok:!0,coins:a,items:o,leftovers:c,name_zh:r.name_zh}}function Hf(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function ih(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function Wf(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:ih(n[e].map,n,t).ok?n[e]:null}var Xn={};function Cs(n){return Xn[n]||(Xn[n]=new En({color:n,transparent:!0}),Xn[n].userData.base=new se(n)),Xn[n]}var br=null;function Y_(){if(br)return br;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),br=new Vn(n),br.colorSpace=ke,br}function Xf(n,t){let e=new wn,i=n.colors,[s,r]=n.size,a=(c,l,f,h,u,d,g,v)=>{let m=new Le(new un(c,l,f),v||Cs(h));return m.position.set(u,d,g),e.add(m),m},o=[];if(n.kind==="villager"){for(let l of[-.13,.13]){let f=a(.2,.6,.22,i.leg,l,.6,0);f.geometry.translate(0,-.6/2,0),o.push(f)}a(.56,.78,.34,t||i.body,0,.6+.39,0);for(let l of[-.36,.36])a(.16,.62,.18,t||i.body,l,1.3399999999999999,0).geometry.translate(0,-.27,0);a(.42,.42,.4,i.head,0,.6+.78+.22,0),a(.5,.1,.48,i.hat,0,.6+.78+.46,0),a(.32,.14,.3,i.hat,0,.6+.78+.56,0),a(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let c=a(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Xn.__face||(Xn.__face=new En({map:Y_(),transparent:!0}),Xn.__face.userData.base=new se("#ffffff"));let l=[Cs(i.head),Cs(i.head),Cs(i.head),Cs(i.head),Cs(i.head),Xn.__face],f=new Le(new un(s*.9,s*.8,s*.8),l);f.position.set(0,r*.72+s*.4,0),e.add(f),o.push(a(.18,.24,.18,i.head,-.2,.12,0),a(.18,.24,.18,i.head,.2,.12,0))}else{let c=n.id==="chicken"?.25:.45,l=r-c-(n.id==="chicken"?.15:.25);a(s,l,n.id==="chicken"?s:s*1.35,i.body,0,c+l/2,0),i.patch&&a(s*.5,l*.55,.02+s*1.36,i.patch,s*.12,c+l*.55,0);let f=n.id==="chicken"?.3:.45,h=a(f,f,f,i.head,0,c+l+f*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(a(.08,.12,.14,i.comb,0,h.position.y+f/2+.05,h.position.z),a(.12,.06,.12,"#D9A63A",0,h.position.y-.02,h.position.z-f/2-.05));let u=n.id==="chicken"?.06:.18,d=n.id==="chicken"?0:s*.45,g=s*.3;for(let[v,m]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-g,-d],[g,-d],[-g,d],[g,d]]){let p=a(u,c,u,i.leg,v,c/2,m);p.geometry.translate(0,-c/2,0),p.position.y=c,o.push(p)}}return e.userData.legs=o,e}function qf(n){for(let t in Xn){let e=Xn[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function sh(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,a)=>{r.rotation.x=a%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var $o="2807355dc2",rh=new URLSearchParams(location.search),J_=720,$f=5,K_=20261008,j_=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,S={touch:j_,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[]};function Q_(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function tx(n,t){try{localStorage.setItem(n,t)}catch{}}async function ex(){let[n,t,e,i,s,r]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json"].map(y=>fetch(y,{cache:"no-cache"}).then(D=>D.json()))),a=Ju(n),o=t.recipes||[],c=y=>a.maxStack(y),l={};try{let[y,D,F,et,X,ot,ht]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests"].map(Bc));l={meta:y,player:D,inv:F,coins:et,furnaces:X,claimed:ot,quests:ht,chunks:await Mf("hw_chunk:")}}catch(y){console.warn("save unavailable",y)}let f=l.meta&&l.meta.seed||K_,h=sf(f,a,s),u=uf(Object.fromEntries(Object.entries(l.chunks||{}).map(([y,D])=>[y.slice(9),D]))),d=l.inv?Dc(l.inv):Oo(),g=cf(l.coins),v=Jc(l.player&&l.player.hp!=null?l.player.hp:20);S.bed=l.player&&l.player.bed||null;let m=i.portals||[],p=Array.isArray(l.claimed)?l.claimed.slice():[],A=l.furnaces||{},L=l.quests||{},b=t.smelt||[],T=t.fuelPerCoal||4;l.meta&&typeof l.meta.time=="number"&&(S.time=l.meta.time);let w=Hi("#c"),C=new Lo({canvas:w,antialias:!1,powerPreference:"high-performance"});C.setPixelRatio(Math.min(window.devicePixelRatio||1,S.touch?1.5:1.25));let _=new Ys,E=new se("#EFEBDD");_.background=E;let N=new Ye(72,1,.08,200);N.rotation.order="YXZ";let V=df(a),q=pf(a,V),U=yf(V.canvas),P=new Worker("assets/hw-worker.js?v="+$o),I=new Vo({scene:_,mats:U,reg:a,worker:P,diffs:u,onDirty:y=>S.dirty.add(y)}),J=Math.max(2,Math.min(6,parseInt(rh.get("rd")||Q_("hw_rd",S.touch?"3":"4"),10)||4));I.setRenderDistance(J),N.far=J*16+40,N.updateProjectionMatrix();let H=await new Promise(y=>{let D=F=>{F.data.type==="ready"&&(P.removeEventListener("message",D),y(F.data.spawn))};P.addEventListener("message",D),P.postMessage({type:"init",seed:f,blocks:n,structures:s,diffs:Object.fromEntries([...u].map(([F,et])=>[F,Fc(et)]))})});l.player?Object.assign(S,{p:{x:l.player.x,y:l.player.y,z:l.player.z},yaw:l.player.yaw||0,pitch:l.player.pitch||0,fly:!!l.player.fly,sel:l.player.sel|0}):(S.p={x:H.x,y:H.y,z:H.z},S.yaw=Math.atan2(-(H.stele.x+.5-H.x),-(H.stele.z+.5-H.z)),S.pitch=-.15);let st=new Qs(new nr(new un(1.004,1.004,1.004)),new ms({color:1382164,transparent:!0,opacity:.45}));st.visible=!1,_.add(st);let Z=mf().map(y=>new Vn(y)),it=new Le(new un(1.01,1.01,1.01),new En({map:Z[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));it.visible=!1,_.add(it);let rt=(y,D)=>{let F=document.createElement("canvas");F.width=F.height=64;let et=F.getContext("2d");et.fillStyle=y,et.beginPath(),et.arc(32,32,28,0,7),et.fill(),D&&(et.globalCompositeOperation="destination-out",et.beginPath(),et.arc(44,26,24,0,7),et.fill());let X=new Vn(F);return X.colorSpace=ke,X},St=new Ni(new di({map:rt("#F2C46B"),depthWrite:!1,fog:!1})),ft=new Ni(new di({map:rt("#EDE6D0",!0),depthWrite:!1,fog:!1}));_.add(St,ft);let xt=new wn,_t=(y,D,F,et,X,ot,ht)=>{let mt=new Le(new un(y,D,F),new En({color:et}));return mt.position.set(X,ot,ht),mt.userData.base=new se(et),xt.add(mt),mt},gt=_t(.24,.75,.26,"#26302A",-.14,.375,0),Y=_t(.24,.75,.26,"#26302A",.14,.375,0);_t(.56,.7,.3,"#2F5A34",0,1.1,0);let nt=_t(.18,.66,.2,"#E7CDA6",-.38,1.12,0),pt=_t(.18,.66,.2,"#E7CDA6",.38,1.12,0);_t(.46,.42,.42,"#E7CDA6",0,1.66,0),_t(.5,.14,.46,"#151714",0,1.9,.02),_t(.12,.12,.05,"#E0352B",.16,1.92,-.24),[gt,Y,nt,pt].forEach(y=>{y.geometry.translate(0,-y.geometry.parameters.height/2+.05,0),y.position.y+=y.geometry.parameters.height/2-.05}),xt.visible=!1,_.add(xt);let Pt={},dt=y=>Pt[y]||(Pt[y]=(()=>{let D=new Image;D.src=q[y];let F=new Ge(D);return F.colorSpace=ke,D.onload=()=>{F.needsUpdate=!0},new di({map:F,depthWrite:!0,alphaTest:.3})})());function Lt(y,D,F,et){let X=new Ni(dt(y));X.scale.set(.42,.42,1),_.add(X),S.drops.push({id:y,s:X,p:{x:D,y:F,z:et},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let Kt=(y,D,F)=>a.flat.solid[I.get(y,D,F)]===1,Ot=Object.fromEntries((e.mobs||[]).map(y=>[y.id,y])),Wt=Pf(),ie=new Map,Vt=0;function ee(y,D){for(let F=61;F>0;F--){let et=I.get(y,F,D);if(a.flat.solid[et])return I.get(y,F+1,D)||I.get(y,F+2,D)?null:{y:F+1,n:et};if(a.flat.liquid[et])return null}return null}function we(y,D,F,et=7){for(let X=-et;X<=et;X++)for(let ot=-et;ot<=et;ot++)for(let ht=-et;ht<=et;ht++)if(a.flat.lightEmit[I.get(y+ht,D+X,F+ot)])return!0;return!1}function Te(y,D,F,et,X){let ot=Lf(Wt,y,{x:D+.5,y:F,z:et+.5}),ht=Xf(y,X);return ie.set(ot.id,ht),_.add(ht),ot}let pe=new Set;function ve(){for(let y of h.villages.around(S.p.x-64,S.p.z-64,S.p.x+64,S.p.z+64))if(!(pe.has(y.id)||!I.ready(y.x,y.z))){pe.add(y.id);for(let D=0;D<y.villagers;D++){let F=Tf(y.id,D,r),et=y.x+(D%2?2:-2),X=y.z+(D-1),ot=ee(et,X),ht=Te(Ot.villager,et,ot?ot.y:y.y+1,X,F.prof.color);Object.assign(ht,{home:{x:y.x,z:y.z},village:y.id,role:F})}}}function z(y){Ot.villager&&ve();let D=Math.random()*Math.PI*2,F=14+Math.random()*14,et=Math.floor(S.p.x+Math.cos(D)*F),X=Math.floor(S.p.z+Math.sin(D)*F);if(!I.ready(et,X))return;let ot=ee(et,X);if(ot)if(Yo(Wt,"animal")<qo.animal&&ot.n===a.num("grass")&&y>.3){let ht=Object.values(Ot).filter(Nt=>Nt.kind==="animal"),mt=ht[Math.floor(Math.random()*ht.length)],Ft=1+Math.floor(Math.random()*3);for(let Nt=0;Nt<Ft&&Yo(Wt,"animal")<qo.animal;Nt++){let $t=et+Nt%2,de=X+(Nt>>1),jt=ee($t,de);jt&&Te(mt,$t,jt.y,de)}}else Yo(Wt,"quiz")<qo.quiz&&Df(y,we(et,ot.y,X))&&Ot.quizling&&Te(Ot.quizling,et,ot.y,X)}function Ie(y,D,F){Vt+=y,Vt>2.5&&S.started&&(Vt=0,z(D));for(let et=Wt.list.length-1;et>=0;et--){let X=Wt.list[et],ot=ie.get(X.id),ht=Math.hypot(X.p.x-S.p.x,X.p.z-S.p.z);if(X.gone){X.goneT=(X.goneT||0)+y,sh(ot,X,F/1e3),X.goneT>.35&&(_.remove(ot),ie.delete(X.id),Wt.list.splice(et,1));continue}if(Nf(X,D,ht)){X.gone=!0,X.goneT=0,X.village&&pe.delete(X.village);continue}if(!I.ready(X.p.x,X.p.z))continue;Uf(X,S.p,y,Math.random),X.v.y-=20*y,X.v.y<-20&&(X.v.y=-20);let mt=Uo(X.p,X.v,y,Kt,{w:Math.min(.9,X.def.size[0]),h:X.def.size[1],canStep:!0,grounded:X.onGround});X.onGround=mt.onGround,a.flat.liquid[I.get(X.p.x,X.p.y+.3,X.p.z)]&&(X.v.y=2),sh(ot,X,F/1e3)}qf(.35+.65*D)}function he(y,D,F){let et,X;y==="screen"?(_n.set(D/innerWidth*2-1,-(F/innerHeight)*2+1,.5).unproject(N).sub(N.position).normalize(),et={x:N.position.x,y:N.position.y,z:N.position.z},X={x:_n.x,y:_n.y,z:_n.z}):(et=qn(),X=qi());let ot=y==="screen"?Je("screen",D,F):Je("center"),ht=null,mt=S.view==="tp"&&y==="screen"?8:4.5;ot&&(mt=Math.min(mt,ot.dist+.5));for(let Ft of Wt.list){if(Ft.gone)continue;let Nt=Bf(et,X,Ft.p,Ft.def.size[0],Ft.def.size[1]);Nt!=null&&Nt<mt&&(mt=Nt,ht=Ft)}return ht}function R(){try{return zf(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function x(y){if(y.kind==="villager"){Zo(y);return}if(y.kind==="animal"){let F=d.slots[S.sel],et=!!(F&&a.toolOf(F.id)&&a.toolOf(F.id).type==="sword"),X=Ff(y,et,Math.random);if(y.v.y=4,y.v.x+=(y.p.x-S.p.x)*1.5,y.v.z+=(y.p.z-S.p.z)*1.5,et){let ot=Hc(d,S.sel,a);ot.broke&&Q(`\u4F60\u7684${a.name(ot.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),vt()}if(X&&X.drops)for(let ot=0;ot<X.drops.n;ot++)Lt(X.drops.id,y.p.x,y.p.y+.6,y.p.z);return}if(y.busy)return;y.busy=!0,xn(),document.pointerLockElement&&document.exitPointerLock(),S.overlay="ask";let D=R().slice(0,30).sort(()=>Math.random()-.5);wf(O.ov,{ids:D,onDone:(F,et)=>{if(S.overlay=null,y.busy=!1,F){let X=Of(!0,et);Gi(g,X),yt(),y.gone=!0,y.goneT=0,Q(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${X} \u91D1\u5E63`),S.dirtyMeta=!0,tt(),S.stats.quizWins=(S.stats.quizWins||0)+1}else if(F===!1){let X=S.p.x-y.p.x,ot=S.p.z-y.p.z,ht=Math.hypot(X,ot)||1;S.v.x=X/ht*7,S.v.z=ot/ht*7,S.v.y=4.5,y.p.x-=X/ht*1.5,y.p.z-=ot/ht*1.5,Q("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let W=(y,D,F)=>I.get(y,D,F),O=nx();function Q(y){let D=G("div",{class:"toast"},y);O.toasts.append(D),setTimeout(()=>D.remove(),2200)}function yt(){O.coins.textContent=g.coins}let bt="";function at(){let y=eh(v.hp),D=y.join();D!==bt&&(bt=D,O.hearts.innerHTML="",y.forEach(F=>O.hearts.append(G("i",{class:"ht "+F}))))}function ct(y){if(S.dead||y<=0)return;let D=jc(v,y);at(),S.dirtyMeta=!0,O.flash.classList.remove("on"),O.flash.offsetWidth,O.flash.classList.add("on"),D&&Et()}function Et(){S.dead=!0,xn(),document.pointerLockElement&&document.exitPointerLock(),S.overlay="dead";let y=O.ov;y.innerHTML="",y.hidden=!1,y.append(G("div",{class:"panel start"},G("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),G("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),G("button",{class:"btn big",onclick:Xt},S.bed?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function Xt(){let y=th(S.bed,H,!!S.bed);S.p={x:y.x,y:y.y,z:y.z},S.v={x:0,y:0,z:0},S.fallTop=y.y,v.hp=20,S.dead=!1,at(),Pe(),S.dirtyMeta=!0,Q(S.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function vt(){O.hotbar.innerHTML="";for(let D=0;D<9;D++){let F=d.slots[D];O.hotbar.append(G("button",{class:"slot"+(D===S.sel?" on":""),"aria-label":F?a.name(F.id):"\u7A7A\u683C",onpointerdown:et=>{et.stopPropagation(),S.sel=D,vt()}},F?G("img",{src:q[F.id],alt:""}):null,F&&F.count>1?G("span",{class:"cnt"},F.count):null,wt(F),G("span",{class:"key"},D+1)))}let y=d.slots[S.sel];O.selName.textContent=y?a.name(y.id):""}function wt(y){let D=If(y,a);return!D||D.left>=D.max?null:G("span",{class:"dur"+(D.frac<.25?" low":"")},G("i",{style:"width:"+Math.round(D.frac*100)+"%"}))}function qt(y=4){let D=new Set,F=Math.floor(S.p.x),et=Math.floor(S.p.y),X=Math.floor(S.p.z);for(let ot=-y;ot<=y;ot++)for(let ht=-y;ht<=y;ht++)for(let mt=-y;mt<=y;mt++){let Ft=I.get(F+mt,et+ot,X+ht);Ft&&D.add(a.get(Ft).id)}return D}let Zt=()=>({near:qt(),owned:new Set(g.owned)}),Qt=-1;function k(){let y=O.ov;y.innerHTML="",y.hidden=!1;let D=G("div",{class:"inv-grid"}),F=mt=>{let Ft=d.slots[mt];return G("button",{class:"slot"+(mt===Qt?" pick":"")+(mt<9?" hb":""),title:Ft?a.name(Ft.id):"",onclick:()=>{Qt<0?d.slots[mt]&&(Qt=mt):(Lc(d,Qt,mt,c),Qt=-1,S.dirtyMeta=!0),k(),vt()}},Ft?G("img",{src:q[Ft.id],alt:""}):null,Ft&&Ft.count>1?G("span",{class:"cnt"},Ft.count):null,wt(Ft))};for(let mt=9;mt<36;mt++)D.append(F(mt));let et=G("div",{class:"inv-grid hbrow"});for(let mt=0;mt<9;mt++)et.append(F(mt));let X=G("div",{class:"craft"},G("h3",{},"\u5408\u6210")),ot=Zt(),ht={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};o.forEach(mt=>{let Ft=zo(d,mt,ot),Nt=Ft.ok;mt.blueprint&&Ft.reason==="blueprint"&&!Object.keys(mt.in).some($t=>$t!=="stick"&&Ln(d,$t)>0)||X.append(G("div",{class:"rcp"+(Nt?"":" no")},G("img",{src:q[mt.out.id],alt:""}),G("div",{class:"rcp-t"},G("b",{},`${mt.name_zh} \xD7${mt.out.count}`),G("small",{},Object.keys(mt.in).map($t=>`${a.name($t)} ${Ln(d,$t)}/${mt.in[$t]}`).join("\u3001")+(ht[Ft.reason]?"\u3000\xB7 "+ht[Ft.reason]:""))),G("button",{class:"btn small",onclick:()=>{let $t=Nc(d,mt,c,Zt());$t.ok?(Q(`\u505A\u597D\u4E86\uFF1A${mt.name_zh} \xD7${mt.out.count}`),S.dirtyMeta=!0):Q({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[$t.reason]||"\u6750\u6599\u4E0D\u5920"),k(),vt()}},"\u88FD\u4F5C")))}),y.append(G("div",{class:"panel inv"},G("div",{class:"p-head"},G("h2",{},"\u80CC\u5305"),G("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),G("div",{class:"inv-wrap"},G("div",{},G("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),D,et),X)))}let Tt=af(a);function lt(){let y=O.ov;y.innerHTML="",y.hidden=!1;let D=G("div",{class:"shop"}),F=Wf(m,ye());Tt.filter(et=>!et.id.startsWith("portal_")||F&&et.id===F.block).forEach(et=>D.append(G("div",{class:"offer"+(et.locked?" locked":"")},G("img",{src:q[et.id],alt:""}),G("div",{class:"of-t"},G("b",{},`${et.name_zh}${et.qty>1?" \xD7"+et.qty:""}`),G("small",{},et.locked?`\uFF08${et.locked}\uFF09`:`${et.price} \u91D1\u5E63${et.desc?"\u3000"+et.desc:""}`)),As(g,et.id)?G("span",{class:"owned"},"\u5DF2\u64C1\u6709"):G("button",{class:"btn small",disabled:et.locked?!0:null,onclick:()=>At(et)},et.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),y.append(G("div",{class:"panel"},G("div",{class:"p-head"},G("h2",{},"\u5546\u5E97\u3000",G("span",{class:"coin"}),` ${g.coins}`),G("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),G("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),D))}function At(y){let D=of(g,d,y,c);D.ok?(Q(y.blueprint?`\u62FF\u5230 ${y.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${y.name_zh} \xD7${y.qty}`),S.dirtyMeta=!0,yt(),vt(),tt()):Q({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[D.reason]||"\u8CB7\u4E0D\u4E86"),lt()}let Rt=null;function ut(){let y=O.ov,D=A[Rt]||(A[Rt]=Wc());y.innerHTML="",y.hidden=!1;let F=D.jobs[0],et=G("div",{class:"shop"});b.forEach(ot=>{let ht=Ln(d,ot.in);et.append(G("div",{class:"offer"+(ht?"":" locked")},G("img",{src:q[ot.in],alt:""}),G("div",{class:"of-t"},G("b",{},`${a.name(ot.in)} \u2192 ${a.name(ot.out)}`),G("small",{},`\u6709 ${ht} \u500B \xB7 \u6BCF\u500B ${ot.time} \u79D2`)),G("button",{class:"btn small",onclick:()=>{let mt=Xc(D,d,ot,T);mt.ok||Q(mt.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),S.dirtyMeta=!0,vt(),ut()}},"\u653E\u9032\u53BB")))});let X=Object.values(D.done).reduce((ot,ht)=>ot+ht,0);y.append(G("div",{class:"panel"},G("div",{class:"p-head"},G("h2",{},"\u7194\u7210"),G("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),G("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,D.fuel-D.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${Ln(d,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${T} \u500B\uFF09`),G("div",{class:"furnace-st"},F?`\u6B63\u5728\u71D2\uFF1A${a.name(F.in)}\uFF08\u9084\u8981 ${Math.ceil(F.left)} \u79D2\uFF0C\u6392\u968A ${D.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),G("div",{class:"row"},G("button",{class:"btn",disabled:X?null:!0,onclick:()=>{let ot=Yc(D,d,c);ot&&Q(`\u62FF\u51FA ${ot} \u500B`),S.dirtyMeta=!0,vt(),ut()}},`\u62FF\u51FA\u4F86\uFF08${X}\uFF09`)),et))}let Yt=null,Gt=(y,D)=>{try{return JSON.parse(localStorage.getItem(y)||"null")||D}catch{return D}},ye=()=>Hf(Gt("hw_portal_rewards",[]),Gt("hi_save",null),m),me='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function on(){let y=m.find(X=>X.map===Yt),D=O.ov;if(D.innerHTML="",D.hidden=!1,!y){Pe();return}let F=Object.keys(y.reward.items).map(X=>`${a.name(X)} \xD7${y.reward.items[X]}`).join("\u3001"),et=ih(y.map,m,ye());if(!et.ok){D.append(G("div",{class:"panel start"},G("div",{class:"p-head"},G("h2",{},"\u50B3\u9001\u9580\u30FB"+y.name_zh),G("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),G("div",{class:"padlock",html:me}),G("p",{class:"big"},`\u5148\u6253\u5012 ${et.need.boss_zh} \u624D\u80FD\u9032\u5165`),G("p",{class:"muted"},`\u5F9E\u300C${et.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${et.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),G("div",{class:"row"},G("button",{class:"btn ghost",onclick:Pe},"\u77E5\u9053\u4E86"))));return}D.append(G("div",{class:"panel start"},G("div",{class:"p-head"},G("h2",{},"\u50B3\u9001\u9580\u30FB"+y.name_zh),G("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),G("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${y.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${y.reward.coins} \u91D1\u5E63\u3001${F}\u3002`),G("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),G("div",{class:"row"},G("button",{class:"btn big",onclick:async()=>{await tt(),S.leaving=kf(y.map),location.href=S.leaving}},"\u9032\u5165"),G("button",{class:"btn ghost",onclick:Pe},"\u5148\u4E0D\u8981"))))}function en(){let y;try{y=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{y=[]}let D=Vf(y,p);for(let F of D){let et=Gf(F,m,d,g,c);if(p.push(F.id),!!et.ok){for(let X in et.leftovers)for(let ot=0;ot<et.leftovers[X];ot++)Lt(X,S.p.x,S.p.y+1,S.p.z);Q(`\u5F9E${et.name_zh}\u5E36\u56DE\u4F86\uFF1A${et.coins} \u91D1\u5E63\u3001${Object.keys(et.items).map(X=>a.name(X)+" \xD7"+et.items[X]).join("\u3001")}`)}}return D.length&&(yt(),vt(),S.dirtyMeta=!0,tt()),D.length}let wi=null;function Zo(y){wi=y,y.busy=!0,ln("trade")}function Wi(){let y=wi,D=O.ov;if(!y)return Pe();D.innerHTML="",D.hidden=!1;let F=y.role,et=Rf(),X=G("div",{class:"shop"});F.prof.offers.forEach(ht=>{let mt=ht.blueprint||ht.give,Ft=!!ht.blueprint,Nt=Ft&&a.blueprints.find(de=>de.id===ht.blueprint),$t=Ft&&As(g,ht.blueprint);X.append(G("div",{class:"offer"},G("img",{src:q[mt],alt:""}),G("div",{class:"of-t"},G("b",{},Ft?Nt.name_zh:`${a.name(mt)}${ht.count>1?" \xD7"+ht.count:""}`),G("small",{},`${ht.price} \u91D1\u5E63${Ft?"\u3000"+(Nt.desc||""):""}`)),$t?G("span",{class:"owned"},"\u5DF2\u64C1\u6709"):G("button",{class:"btn small",onclick:()=>{let de=Af(g,d,ht,c);de.ok?(Q(Ft?`\u62FF\u5230 ${Nt.name_zh}\uFF01`:`\u8CB7\u5230 ${a.name(mt)} \xD7${ht.count}`),S.dirtyMeta=!0,yt(),vt(),tt()):Q({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[de.reason]||"\u8CB7\u4E0D\u4E86"),Wi()}},"\u8CFC\u8CB7")))});let ot=G("div",{class:"quests"});F.quests.forEach(ht=>{let mt=Gc(L,ht,et),Ft=Object.keys(ht.reward.items||{}).map(Nt=>`${a.name(Nt)} \xD7${ht.reward.items[Nt]}`).join("\u3001");ot.append(G("div",{class:"offer quest"+(mt?" locked":"")},G("div",{class:"of-t"},G("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+ht.title_zh),G("small",{},`${ht.desc}\uFF0C\u7B54\u5C0D ${ht.need} \u984C \u2192 ${ht.reward.coins} \u91D1\u5E63\u3001${Ft}`)),mt?G("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):G("button",{class:"btn small",onclick:()=>{S.overlay="quest",Ef(O.ov,{quest:ht,onDone:Nt=>{if(S.overlay="trade",Nt>=0){let $t=Cf(L,ht,Nt,et,g,d,c);if($t.ok){for(let de in $t.leftovers)for(let jt=0;jt<$t.leftovers[de];jt++)Lt(de,S.p.x,S.p.y+1,S.p.z);Q(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${$t.coins} \u91D1\u5E63\u3001${Ft}`),yt(),vt(),S.dirtyMeta=!0,tt(),S.stats.quests=(S.stats.quests||0)+1}else Q(`\u7B54\u5C0D ${Nt} \u984C\uFF0C\u8981 ${ht.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Wi()}})}},"\u63A5\u59D4\u8A17")))}),D.append(G("div",{class:"panel"},G("div",{class:"p-head"},G("h2",{},`\u6751\u6C11\u30FB${F.prof.name_zh}\u3000`,G("span",{class:"coin"}),` ${g.coins}`),G("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),G("h3",{},"\u4EA4\u6613"),X,G("h3",{},"\u82F1\u6587\u59D4\u8A17"),G("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),ot))}function Rs(){let y=O.ov;y.innerHTML="",y.hidden=!1;let D=G("b",{},I.rd),F=G("input",{type:"range",min:2,max:6,step:1,value:I.rd,oninput:et=>{D.textContent=et.target.value},onchange:et=>{let X=+et.target.value;I.setRenderDistance(X),N.far=X*16+40,N.updateProjectionMatrix(),tx("hw_rd",X)}});y.append(G("div",{class:"panel"},G("div",{class:"p-head"},G("h2",{},"\u8A2D\u5B9A"),G("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Pe},"\xD7")),G("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",D,F),G("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),G("div",{class:"row"},G("button",{class:"btn ghost",onclick:Jo},"\u91CD\u7F6E\u4E16\u754C")),G("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),G("p",{class:"muted small"},"\u7248\u672C "+$o)))}async function Jo(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){S.resetting=!0;try{await Sf(["hw_coins"])}catch(y){console.warn(y)}location.reload()}}function ln(y){document.pointerLockElement&&document.exitPointerLock(),S.overlay=y,xn(),y==="inv"?(Qt=-1,k()):y==="shop"?lt():y==="set"?Rs():y==="furnace"?ut():y==="portal"?on():y==="trade"?Wi():y==="quiz"&&bf(O.ov,{onReward:D=>{Gi(g,D),yt(),S.dirtyMeta=!0,tt()},onClose:()=>{S.overlay=null}})}function Pe(){O.ov.hidden=!0,O.ov.innerHTML="",S.overlay=null,wi&&(wi.busy=!1,wi=null)}O.btnInv.onclick=()=>S.overlay==="inv"?Pe():ln("inv"),O.btnShop.onclick=()=>S.overlay==="shop"?Pe():ln("shop"),O.btnSet.onclick=()=>S.overlay==="set"?Pe():ln("set"),O.btnView.onclick=()=>Dn();function Dn(){S.view=S.view==="fp"?"tp":"fp",Q(S.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Xi(){S.fly=!S.fly,S.v.y=0,O.root.classList.toggle("flying",S.fly),Q(S.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC")}let _n=new $;function qi(){let y=Math.cos(S.pitch);return{x:-Math.sin(S.yaw)*y,y:Math.sin(S.pitch),z:-Math.cos(S.yaw)*y}}let qn=()=>({x:S.p.x,y:S.p.y+1.62+S.eyeOff,z:S.p.z}),Is=y=>y&&!a.flat.liquid[y];function Je(y,D,F){if(y==="screen"){_n.set(D/innerWidth*2-1,-(F/innerHeight)*2+1,.5).unproject(N).sub(N.position).normalize();let et=N.position,X=S.view==="tp"?et.distanceTo(new $(S.p.x,S.p.y+1.62,S.p.z)):0;return Fo({x:et.x,y:et.y,z:et.z},{x:_n.x,y:_n.y,z:_n.z},$f+1+X,W,Is)}return Fo(qn(),qi(),$f,W,Is)}function xn(){S.mining.active=!1,S.mining.k="",S.mining.t=0,it.visible=!1}function wr(y,D,F){let et=a.get(I.get(y,D,F)),X=a.get(et.openAs||et.closeAs);if(!X)return;let ot=mt=>{let Ft=a.get(mt);return Ft&&Ft.interact==="door"},ht=D;for(;ot(I.get(y,ht-1,F));)ht--;for(let mt=ht;ot(I.get(y,mt,F));mt++)I.set(y,mt,F,X.n);S.dirtyMeta=!0}let Er=()=>{let y=d.slots[S.sel];return y?a.toolOf(y.id):null};function Ko(y){let D=y.n,F=Wo(a.get(D),Er());if(!I.set(y.x,y.y,y.z,0))return;let et=F.harvest?a.dropOf(D):null;et?Lt(et,y.x+.5,y.y+.4,y.z+.5):F.harvest||Q(`${a.name(D)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let X=I.get(y.x,y.y+1,y.z);if(a.flat.plant[X]){I.set(y.x,y.y+1,y.z,0);let ht=a.dropOf(X);ht&&Lt(ht,y.x+.5,y.y+1.3,y.z+.5)}if(a.get(D).interact==="door")for(let ht of[-1,1]){let mt=I.get(y.x,y.y+ht,y.z);a.get(mt)&&a.get(mt).interact==="door"&&I.set(y.x,y.y+ht,y.z,0)}let ot=y.x+","+y.y+","+y.z;if(S.bed&&S.bed.x===y.x&&S.bed.y===y.y&&S.bed.z===y.z&&(S.bed=null,Q("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),A[ot]){let ht=$c(A[ot]);for(let mt in ht)for(let Ft=0;Ft<ht[mt];Ft++)Lt(mt,y.x+.5,y.y+.4,y.z+.5);delete A[ot]}if(F.usesTool){let ht=Hc(d,S.sel,a);ht.broke&&Q(`\u4F60\u7684${a.name(ht.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),vt()}S.dirtyMeta=!0,S.stats.mined++}function Ei(y){if(!y)return!1;let D=a.get(y.n);if(D&&D.interact==="quiz")return ln("quiz"),!0;let F=d.slots[S.sel]&&a.get(d.slots[S.sel].id).placeable;if(D&&D.interact==="door")return wr(y.x,y.y,y.z),!0;if(D&&D.interact==="portal"&&!F)return Yt=D.portal,ln("portal"),!0;if(D&&D.interact==="bed"&&!F)return S.bed={x:y.x,y:y.y,z:y.z},S.dirtyMeta=!0,Q("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(D&&D.interact==="craft"&&!F)return ln("inv"),!0;if(D&&D.interact==="furnace"&&!F)return Rt=y.x+","+y.y+","+y.z,ln("furnace"),!0;let et=d.slots[S.sel];if(!et)return Q("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let X=a.get(et.id);if(!X||!X.placeable)return Q(`${a.name(et.id)} \u4E0D\u80FD\u653E`),!1;let ot=a.flat.plant[y.n]&&!a.flat.plant[X.n],ht=ot?y.x:y.x+y.face[0],mt=ot?y.y:y.y+y.face[1],Ft=ot?y.z:y.z+y.face[2];if(mt<0||mt>=64)return!1;let Nt=I.get(ht,mt,Ft);if(Nt&&!a.flat.liquid[Nt]&&!(ot&&a.flat.plant[Nt]))return!1;let $t=.6/2;return X.solid&&ht+1>S.p.x-$t&&ht<S.p.x+$t&&Ft+1>S.p.z-$t&&Ft<S.p.z+$t&&mt+1>S.p.y&&mt<S.p.y+1.8?!1:a.flat.plant[X.n]&&!a.flat.solid[I.get(ht,mt-1,Ft)]?(Q(`${X.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1):I.set(ht,mt,Ft,X.n)?(X.interact==="door"&&!I.get(ht,mt+1,Ft)&&I.set(ht,mt+1,Ft,X.n),Pc(d,S.sel,1),S.dirtyMeta=!0,vt(),S.stats.placed++,!0):!1}addEventListener("keydown",y=>{if(y.target&&y.target.tagName==="INPUT")return;let D=y.key.toLowerCase();if(D==="e"){S.overlay==="inv"?Pe():!S.overlay&&ln("inv"),y.preventDefault();return}if(S.overlay!=="dead"&&!(S.overlay==="ask"||S.overlay==="quest")){if(D==="escape"&&S.overlay){S.overlay==="quiz"?(O.ov.hidden=!0,O.ov.innerHTML="",S.overlay=null):Pe();return}S.overlay||(S.keys[D]=!0,y.code==="Space"&&(S.keys[" "]=!0,y.preventDefault()),D>="1"&&D<="9"&&(S.sel=+D-1,vt()),D==="f"&&Xi(),D==="v"&&Dn())}}),addEventListener("keyup",y=>{S.keys[y.key.toLowerCase()]=!1,y.code==="Space"&&(S.keys[" "]=!1)}),addEventListener("blur",()=>{S.keys={},xn()}),w.addEventListener("mousedown",y=>{if(!(S.touch||S.overlay)){if(document.pointerLockElement!==w){w.requestPointerLock&&w.requestPointerLock();return}if(y.button===0){let D=he("center");if(D){x(D);return}S.mining.active=!0,S.mining.src="center"}y.button===2&&(Ei(Je("center")),S.placeRepeat=.3,S.rightHeld=!0)}}),addEventListener("mouseup",y=>{y.button===0&&xn(),y.button===2&&(S.rightHeld=!1)}),w.addEventListener("contextmenu",y=>y.preventDefault()),addEventListener("mousemove",y=>{document.pointerLockElement===w&&(S.yaw-=y.movementX*.0024,S.pitch=Math.max(-1.55,Math.min(1.55,S.pitch-y.movementY*.0024)))}),addEventListener("wheel",y=>{S.overlay||S.touch||(S.sel=(S.sel+(y.deltaY>0?1:8))%9,vt())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{O.root.classList.toggle("locked",document.pointerLockElement===w)});let Ti=new Map;function Tr(y){S.touch!==y&&(S.touch=y,O.root.classList.toggle("touch",y),document.body.classList.toggle("is-touch",y))}O.root.classList.toggle("touch",S.touch),document.body.classList.toggle("is-touch",S.touch),w.addEventListener("pointerdown",y=>{if(y.pointerType!=="touch"||(Tr(!0),S.overlay))return;if(y.preventDefault(),y.clientX<innerWidth*.4&&y.clientY>innerHeight*.35&&!S.joy.active){S.joy={x:0,y:0,active:!0,id:y.pointerId,ox:y.clientX,oy:y.clientY},O.joy.style.transform=`translate(${y.clientX-60}px, ${y.clientY-60}px)`,O.joy.hidden=!1,O.knob.style.transform="translate(0px,0px)",Ti.set(y.pointerId,{kind:"joy"});return}let D={kind:"look",x:y.clientX,y:y.clientY,sx:y.clientX,sy:y.clientY,t0:performance.now(),drag:!1,hold:!1};D.timer=setTimeout(()=>{D.drag||(D.hold=!0,S.mining.active=!0,S.mining.src="screen",S.mining.sx=D.x,S.mining.sy=D.y)},280),Ti.set(y.pointerId,D)},{passive:!1}),addEventListener("pointermove",y=>{let D=Ti.get(y.pointerId);if(!D)return;if(D.kind==="joy"){let X=y.clientX-S.joy.ox,ot=y.clientY-S.joy.oy,ht=Math.hypot(X,ot),mt=55;ht>mt&&(X*=mt/ht,ot*=mt/ht),S.joy.x=X/mt,S.joy.y=ot/mt,O.knob.style.transform=`translate(${X}px,${ot}px)`;return}let F=y.clientX-D.x,et=y.clientY-D.y;D.x=y.clientX,D.y=y.clientY,!D.drag&&Math.hypot(D.x-D.sx,D.y-D.sy)>12&&(D.drag=!0,clearTimeout(D.timer),D.hold&&(xn(),D.hold=!1)),D.drag?(S.yaw-=F*.0055,S.pitch=Math.max(-1.55,Math.min(1.55,S.pitch-et*.0055))):D.hold&&(S.mining.sx=D.x,S.mining.sy=D.y)});let M=y=>{let D=Ti.get(y.pointerId);if(D){if(Ti.delete(y.pointerId),D.kind==="joy"){S.joy={x:0,y:0,active:!1},O.joy.hidden=!0;return}if(clearTimeout(D.timer),D.hold)xn();else if(!D.drag&&performance.now()-D.t0<280&&!S.overlay){let F=he("screen",D.x,D.y);F?x(F):Ei(Je("screen",D.x,D.y))}}};addEventListener("pointerup",M),addEventListener("pointercancel",M);let B=(y,D,F)=>{y.addEventListener("pointerdown",et=>{et.preventDefault(),et.stopPropagation(),D()}),y.addEventListener("pointerup",F),y.addEventListener("pointercancel",F),y.addEventListener("pointerleave",F)};B(O.bJump,()=>{S.jumpHeld=!0},()=>{S.jumpHeld=!1}),B(O.bDown,()=>{S.downHeld=!0},()=>{S.downHeld=!1}),O.bFly.addEventListener("pointerdown",y=>{y.preventDefault(),y.stopPropagation(),Xi()}),O.bPlace.addEventListener("pointerdown",y=>{y.preventDefault(),y.stopPropagation(),Ei(Je("center"))}),document.addEventListener("touchmove",y=>{y.target.closest(".scroll, .panel")||y.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(y=>document.addEventListener(y,D=>D.preventDefault(),{passive:!1})),O.start.hidden=!1,O.go.onclick=()=>{O.start.hidden=!0,S.started=!0,S.paused=!1,O.root.classList.add("started"),!S.touch&&w.requestPointerLock&&w.requestPointerLock()};async function tt(){if(S.resetting)return;let y={hw_meta:{v:1,seed:f,time:S.time,build:$o},hw_player:{x:S.p.x,y:S.p.y,z:S.p.z,yaw:S.yaw,pitch:S.pitch,fly:S.fly,sel:S.sel,hp:v.hp,bed:S.bed},hw_inventory:Bo(d),hw_coins:lf(g),hw_furnaces:A,hw_quests:L,hw_portal_claimed:p.slice(-200)};for(let D of S.dirty){let F=u.get(D);F&&(y["hw_chunk:"+D]=Fc(F))}S.dirty.clear(),S.dirtyMeta=!1;try{await zc(y),S.lastSave=Date.now()}catch(D){console.warn("save failed",D)}}setInterval(()=>{S.started&&tt()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&S.started&&tt()}),addEventListener("pagehide",()=>{S.started&&tt()}),S.stats={mined:0,placed:0};function K(){let y=innerWidth,D=innerHeight;C.setSize(y,D,!1),N.aspect=y/D,N.updateProjectionMatrix()}addEventListener("resize",K),K(),yt(),vt(),at(),en(),addEventListener("pageshow",y=>{y.persisted&&en()});let j=performance.now(),Ct=0,Ut=0,It=new se("#EFEBDD"),Bt=new se("#22302F"),Ht=new se("#E6B48C");function re(y){requestAnimationFrame(re);let D=(y-j)/1e3;j=y;let F=Math.min(.05,D);S.frames.push(D*1e3),S.frames.length>4e3&&S.frames.shift(),I.update(S.p.x,S.p.z);let et=I.ready(S.p.x,S.p.z);S.auto&&Se(F),S.started&&!S.overlay&&et&&zt(F),S.started&&!S.dead&&Qc(v,F)&&(at(),S.dirtyMeta=!0),S.time=(S.time+F/J_)%1;let X=S.time*Math.PI*2,ot=Math.sin(X),ht=Math.min(1,Math.max(0,(ot+.12)/.42));E.copy(Bt).lerp(It,ht);let mt=Math.max(0,1-Math.abs(ot)/.3)*(ht>.05?1:.4);E.lerp(Ht,mt*.55),U.uniforms.uDay.value=ht,U.uniforms.uFog.value.set(...le(E));let Ft=qn();S.eyeOff*=Math.pow(5e-4,F);let Nt=qi();if(S.view==="tp"){let jt=Fo(Ft,{x:-Nt.x,y:-Nt.y,z:-Nt.z},4,W,We=>a.flat.opaque[We]===1),be=jt?Math.max(.4,jt.dist-.25):4;N.position.set(Ft.x-Nt.x*be,Ft.y-Nt.y*be,Ft.z-Nt.z*be)}else N.position.set(Ft.x,Ft.y,Ft.z);N.rotation.set(S.pitch,S.yaw,0);let $t=N.far*.8;if(St.position.set(N.position.x+Math.cos(X)*$t,N.position.y+Math.sin(X)*$t,N.position.z+.25*$t),St.scale.setScalar($t*.14),ft.position.set(N.position.x-Math.cos(X)*$t,N.position.y-Math.sin(X)*$t,N.position.z-.25*$t),ft.scale.setScalar($t*.1),xt.visible=S.view==="tp",xt.visible){xt.position.set(S.p.x,S.p.y,S.p.z),xt.rotation.y=S.yaw;let jt=Math.hypot(S.v.x,S.v.z),be=Math.sin(y/120)*Math.min(1,jt/4)*.7;gt.rotation.x=be,Y.rotation.x=-be,nt.rotation.x=-be,pt.rotation.x=be;let We=.35+.65*ht;xt.children.forEach(si=>si.material.color.copy(si.userData.base).multiplyScalar(We))}for(let jt in Pt)Pt[jt].color.setScalar(.4+.6*ht);let de=S.started&&!S.overlay?S.mining.active&&S.mining.src==="screen"?Je("screen",S.mining.sx,S.mining.sy):Je("center"):null;if(de?(st.visible=!0,st.position.set(de.x+.5,de.y+.5,de.z+.5)):st.visible=!1,S.mining.active&&de){let jt=de.x+","+de.y+","+de.z;jt!==S.mining.k&&(S.mining.k=jt,S.mining.t=0),S.mining.t+=F;let be=Wo(a.get(de.n),Er()).time;if(be===1/0)it.visible=!1,S.mining.warned||(Q(a.name(de.n)+"\u6316\u4E0D\u52D5"),S.mining.warned=!0);else{let We=S.mining.t/be;it.visible=!0,it.position.copy(st.position),it.material.map=Z[Math.min(3,Math.floor(We*4))],We>=1&&(Ko(de),S.mining.k="",S.mining.t=0,it.visible=!1)}}else it.visible=!1,S.mining.active||(S.mining.warned=!1);S.rightHeld&&!S.overlay&&(S.placeRepeat-=F,S.placeRepeat<=0&&(Ei(Je("center")),S.placeRepeat=.25)),ge(F),Ie(S.overlay?0:F,ht,y);for(let jt in A){let be=A[jt];be.jobs.length&&(qc(be,F),S.dirtyMeta=!0,S.overlay==="furnace"&&jt===Rt&&(S.furnUi=(S.furnUi||0)+F)>.5&&(S.furnUi=0,ut()))}C.render(_,N),Ct+=D,Ut++,Ct>.5&&(O.dbg&&(O.dbg.textContent=`${Math.round(Ut/Ct)} fps \xB7 \u5340\u584A ${I.stats.loaded} \xB7 ${nf[h.biomeOf(Math.floor(S.p.x),Math.floor(S.p.z))]} \xB7 ${S.p.x.toFixed(1)}, ${S.p.y.toFixed(1)}, ${S.p.z.toFixed(1)}`),Ct=0,Ut=0),!et&&S.started?O.loading.hidden=!1:O.loading.hidden=!0}function le(y){let D=y.getHexString();return[parseInt(D.slice(0,2),16)/255,parseInt(D.slice(2,4),16)/255,parseInt(D.slice(4,6),16)/255]}function zt(y){let D=S.keys,F=(D.d?1:0)-(D.a?1:0),et=(D.w?1:0)-(D.s?1:0);S.joy.active&&(F=S.joy.x,et=-S.joy.y);let X=Math.min(1,Math.hypot(F,et));if(X>0){let Ai=Math.hypot(F,et);F=F/Ai*X,et=et/Ai*X}let ot=-Math.sin(S.yaw),ht=-Math.cos(S.yaw),mt=Math.cos(S.yaw),Ft=-Math.sin(S.yaw),Nt=D.control||!S.fly&&D.shift||S.joy.active&&X>.92,$t=W(S.p.x,S.p.y+.1,S.p.z),de=W(S.p.x,S.p.y+1,S.p.z),jt=a.flat.liquid[$t]===1||a.flat.liquid[de]===1,be=S.fly?10:jt?2.6:Nt?6.2:4.3,We=(ot*et+mt*F)*be,si=(ht*et+Ft*F)*be,Ar=D[" "]||S.jumpHeld,ah=S.fly&&D.shift||S.downHeld;if(S.fly)S.v.x=We,S.v.z=si,S.v.y=((Ar?1:0)-(ah?1:0))*8;else{let Ai=S.onGround?14:5,lh=1-Math.exp(-Ai*y);S.v.x+=(We-S.v.x)*lh,S.v.z+=(si-S.v.z)*lh,jt?(S.v.y-=9*y,S.v.y<-3&&(S.v.y=-3),Ar&&(S.v.y=3.4)):a.flat.climb[$t]||a.flat.climb[de]?(S.v.y=Ar||et>.1?3.2:ah?-3:Math.max(S.v.y-28*y,-1.5),S.fallTop=S.p.y):(S.v.y-=28*y,S.v.y<-40&&(S.v.y=-40),Ar&&S.onGround&&(S.v.y=8.6,S.onGround=!1))}let oh=S.onGround,jo=Uo(S.p,S.v,y,Kt,{canStep:!S.fly,grounded:S.onGround});if(S.onGround=jo.onGround,jo.stepped&&(S.eyeOff-=jo.stepped),S.fallTop==null||S.fly||jt||S.onGround&&oh?S.fallTop=S.p.y:S.onGround||(S.fallTop=Math.max(S.fallTop,S.p.y)),S.onGround&&!oh){let Ai=Kc(S.fallTop-S.p.y,{water:jt,flying:S.fly});Ai&&(ct(Ai),Q("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),S.fallTop=S.p.y}S.p.y<-20&&(S.p={x:H.x,y:H.y+1,z:H.z},S.v={x:0,y:0,z:0},S.fallTop=S.p.y)}function ge(y){let D=S.p.x,F=S.p.y+.9,et=S.p.z;for(let X=S.drops.length-1;X>=0;X--){let ot=S.drops[X];ot.age+=y;let ht=D-ot.p.x,mt=F-ot.p.y,Ft=et-ot.p.z,Nt=Math.hypot(ht,mt,Ft);if(Nt<1.5&&ot.age>.25&&an(d,ot.id,1,c)===0){_.remove(ot.s),S.drops.splice(X,1),S.dirtyMeta=!0,vt();continue}if(Nt<4.5&&ot.age>.25?(ot.v.x=ht/Nt*6,ot.v.y=mt/Nt*6,ot.v.z=Ft/Nt*6,ot.p.x+=ot.v.x*y,ot.p.y+=ot.v.y*y,ot.p.z+=ot.v.z*y):(ot.v.y-=18*y,ot.v.x*=.9,ot.v.z*=.9,Uo(ot.p,ot.v,y,Kt,{w:.25,h:.25})),ot.age>300){_.remove(ot.s),S.drops.splice(X,1);continue}ot.s.position.set(ot.p.x,ot.p.y+.2+Math.sin(ot.age*3)*.06,ot.p.z)}}S.auto=rh.get("auto")==="walk";let Ae=0;function Se(y){S.started||O.go.click(),Ae+=y,S.keys.w=!0,S.keys[" "]=Ae%1.6<.15,S.yaw+=y*.08}window.HW={build:$o,G:S,reg:a,inv:d,wallet:g,world:I,Inv:Uc,questState:L,tradesJson:r,spawnVillagers:ve,terr:h,claimPortalRewards:en,portals:m,claimedIds:p,mobS:Wt,mobDefs:Ot,spawnMob:Te,hitMob:x,mobAt:he,surfaceY:ee,health:v,hurt:ct,Health:nh,furnaces:A,Smelt:Zc,smeltList:b,recipes:o,craftCtx:Zt,breakInfo:Wo,start(){O.go.click()},state(){return{pos:{...S.p},coins:g.coins,inv:Bo(d),loaded:I.stats.loaded,stats:{...S.stats},overlay:S.overlay,fly:S.fly}},lookAt(y,D,F){let et=qn(),X=y-et.x,ot=D-et.y,ht=F-et.z;S.yaw=Math.atan2(-X,-ht),S.pitch=Math.atan2(ot,Math.hypot(X,ht))},target(){let y=Je("center");return y&&{x:y.x,y:y.y,z:y.z,n:y.n,face:y.face}},mine(y){y?(S.mining.active=!0,S.mining.src="center"):xn()},use(){return Ei(Je("center"))},key(y,D){S.keys[y]=D},open:ln,close:Pe,save:tt,spawn:H,perf(){return{frames:S.frames.slice(),meshMs:I.stats.meshMs.slice(),genMs:I.stats.genMs.slice(),loaded:I.stats.loaded}},resetPerf(){S.frames.length=0,I.stats.meshMs.length=0,I.stats.genMs.length=0},ready:()=>I.ready(S.p.x,S.p.z)},requestAnimationFrame(re)}function nx(){let n=Hi("#ui"),t=e=>n.querySelector(e);return rh.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),hearts:t("#hearts"),flash:Hi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Hi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Hi("#start"),go:Hi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}ex().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
